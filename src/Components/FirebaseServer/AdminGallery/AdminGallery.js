import React, { useState, useEffect, useRef } from "react";
import db, { storage } from "../../../firebase";
import styles from "./AdminGallery.module.css";
import Loading from "../Loading/Loading";

const AdminGallery = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("galleryimages").onSnapshot((snapshot) => {
        setImageUrl(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().photoUrl,
            fileName: doc.data().pathName,
          }))
        );
      });
    };
    const fetchVideo = async () => {
      db.collection("galleryvideos").onSnapshot((snapshot) => {
        setVideoUrl(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().photoUrl,
            fileName: doc.data().pathName,
          }))
        );
      });
    };

    fetchImages();
    fetchVideo();
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = async (e) => {
    setLoading(true);
    const { name } = e.target;
    if (!file) return;
    const path = `/gallery/${name === "image" ? "images" : "videos"}/${
      file.name
    }`;
    const ref = storage.ref(path);
    await ref.put(file);
    const photoUrl = await ref.getDownloadURL();
    setPhotoUrl(photoUrl);
    setFileName(file.name);
    setFile(null);
    setLoading(false);
    if (fileInputRef.current) {
      setLoading(false);
      fileInputRef.current.value = ""; // Reset file input value to empty
    }
  };

  const submitResult = async (e) => {
    setLoading(true);
    if (!photoUrl || !fileName) {
      alert("Kindly upload an image first");
      return;
    }
    const { name } = e.target;
    const id = randomString();
    const ref = name === "image" ? "galleryimages" : "galleryvideos";
    await db.collection(ref).doc(id).set({
      photoUrl: photoUrl,
      pathName: fileName,
    });
    setPhotoUrl("");
    setLoading(false);
  };

  const handleDelete = async (id, fileName, str) => {
    if (str === "image") {
      await storage.ref(`/gallery/images/${fileName}`).delete();
      await db.collection("galleryimages").doc(id).delete();
    } else {
      await storage.ref(`/gallery/videos/${fileName}`).delete();
      await db.collection("galleryvideos").doc(id).delete();
    }
  };

  const randomString = () => {
    let result = "";
    let length = 20;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  return (
    <>
      <div style={{ position: "absolute" }}>
        {loading === true ? <Loading /> : ""}
      </div>
      <div className={styles.container}>
        <div className={styles.image__container}>
          <div>
            <div className={styles.heading}>Upload Image</div>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              ref={fileInputRef}
            />
            <button name="image" onClick={handleUpload} disabled={!file}>
              Upload to Cloud
            </button>
          </div>
          <div>
            <img src={photoUrl} alt="" style={{ width: "10%" }} />
          </div>
          <button
            className={styles.hom__sub}
            name="image"
            disabled={!photoUrl || !fileName}
            onClick={submitResult}
          >
            Submit
          </button>
        </div>
        <div className={styles.image__container}>
          <div>
            <div className={styles.heading}>Upload Video</div>
            <input
              type="file"
              name="video"
              onChange={handleChange}
              ref={fileInputRef}
            ></input>
            <button name="video" onClick={handleUpload} disabled={!file}>
              Upload to Cloud
            </button>
          </div>
          <div>
            <video src={photoUrl} alt="" style={{ width: "10%" }} />
          </div>
          <button
            className={styles.hom__sub}
            name="video"
            disabled={!photoUrl || !fileName}
            onClick={submitResult}
          >
            Submit
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Image Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {imageUrl.map((img, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={img.url}
                    alt="slide_image"
                  />
                </td>
                <td>{img.fileName}</td>
                <td>
                  <p
                    onClick={() => handleDelete(img.id, img.fileName, "image")}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Video</th>
              <th>Video Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {videoUrl.map((img, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <video style={{ width: "100px", height: "100px" }} controls>
                    <source src={img.url} type="video/mp4" />
                  </video>
                </td>
                <td>{img.fileName}</td>
                <td>
                  <button onClick={() => handleDelete(img.id, img.fileName)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminGallery;
