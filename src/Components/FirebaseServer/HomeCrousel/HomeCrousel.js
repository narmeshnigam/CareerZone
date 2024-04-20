import React, { useEffect, useState, useRef } from "react";
import styles from './HomeCrousel.module.css'
import db, { storage } from "../../../firebase";
import Loading from '../Loading/Loading';

const HomeCarousel = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const fileInputRef = useRef(null);
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchImages = async () => {
      db.collection('topCarousel_db').onSnapshot(snapshot => {
        setImgUrls(snapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().photoUrl,
          fileName: doc.data().pathName
        })));
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
    setLoading(true)
    if (!file) return;
    const path = `/topCarousel/${file.name}`;
    const ref = storage.ref(path);
    await ref.put(file);
    const photoUrl = await ref.getDownloadURL();
    setPhotoUrl(photoUrl); // Update photoUrl state
    setFileName(file.name); // Update fileName state
    setFile(null);

    // Reset file input value
    if (fileInputRef.current) {
      setLoading(false)
      fileInputRef.current.value = ""; // Reset file input value to empty
    }
  };

  const handleDelete = async (id, fileName) => {
    setLoading(true)
    await storage.ref(`/topCarousel/${fileName}`).delete();
    await db.collection("topCarousel_db").doc(id).delete();
    setLoading(false)
  };

  const submitResult = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!photoUrl || !fileName) {
      alert("Kindly upload an image first");
      return;
    }
    const id = randomString();
    await db.collection("topCarousel_db").doc(id).set({
      photoUrl: photoUrl,
      pathName: fileName
    });
    setPhotoUrl("");
    setLoading(false)
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
    <div style={{position:'absolute', backgroundColor:'#00000021'}}>{loading === true ? <Loading/>: ''}</div>
    <div className={styles.container}>
      <div className={styles.upload_input}>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            onChange={handleChange}
            ref={fileInputRef} // Assign ref to file input element
          />
          <button disabled={!file}>Upload to Cloud</button>
        </form>
        <img src={photoUrl} alt="" style={{ width: "10%" }} />
      </div>
      <button className={styles.hom__sub} disabled={!photoUrl || !fileName} onClick={submitResult}>
        Submit
      </button>
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
                <img style={{ width: '100px', height: '100px' }} src={img.url} alt="slide_image" />
              </td>
              <td>{img.fileName}</td>
              <td>
                <button onClick={() => handleDelete(img.id, img.fileName)}>Delete</button>
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
