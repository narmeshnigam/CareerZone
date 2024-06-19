import React, { useEffect, useState, useRef } from "react";
import styles from "./HomeCrousel.module.css";
import db, { storage } from "../../../firebase";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const HomeCarousel = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("topCarousel_db").onSnapshot((snapshot) => {
        setImgUrls(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().photoUrl,
            fileName: doc.data().pathName, // Corrected to fileName
          }))
        );
      });
    };

    fetchImages();
  }, []);

  function handleChange(e) {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file) return;
    const path = `/topCarousel/${file.name}`;
    const ref = storage.ref(path);
    try {
      await ref.put(file);
      const photoUrl = await ref.getDownloadURL();
      setPhotoUrl(photoUrl); // Update photoUrl state
      setFileName(file.name); // Update fileName state
      setFile(null);

      // Reset file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input value to empty
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error uploading file
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, fileName) => {
    setLoading(true);

    // Show confirmation dialog
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await storage.ref(`/topCarousel/${fileName}`).delete();
        await db.collection("topCarousel_db").doc(id).delete();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting file:", error);
        // Handle error deleting file or document
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false); // Ensure loading state is set to false if delete is canceled
    }
  };

  const submitResult = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!photoUrl || !fileName) {
      alert("Kindly upload an image first");
      setLoading(false);
      return;
    }
    const id = randomString();
    try {
      await db.collection("topCarousel_db").doc(id).set({
        photoUrl: photoUrl,
        pathName: fileName, // Ensure pathName is correctly set to fileName
      });
      setPhotoUrl("");
    } catch (error) {
      console.error("Error submitting result:", error);
      // Handle error submitting data
    } finally {
      setLoading(false);
    }
  };

  function randomString() {
    var result = "";
    let length = 20;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  return (
    <>
      <div style={{ position: "absolute", backgroundColor: "#00000021" }}>
        {loading && <Loading />}
      </div>
      <div className={styles.container}>
        <div className={styles.upload_input}>
          <form onSubmit={handleUpload}>
            <input
              type="file"
              onChange={handleChange}
              ref={fileInputRef} // Assign ref to file input element
            />
            <button type="submit" disabled={!file}>
              Upload to Cloud
            </button>
          </form>
          <img src={photoUrl} alt="" style={{ width: "10%" }} />
        </div>
        <div
          className={styles.submitBtn}
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            className={styles.hom__sub}
            disabled={!photoUrl || !fileName}
            onClick={submitResult}
          >
            Submit
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {imgUrls.map((img) => (
              <tr key={img.id}>
                <td>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={img.url}
                    alt="slide_image"
                  />
                </td>
                <td>{img.fileName}</td>
                <td>
                  <div
                    onClick={() => handleDelete(img.id, img.fileName)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.redIcon}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeCarousel;
