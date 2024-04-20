import React, { useState } from 'react';
import db, { storage } from "../../../firebase";
import styles from './AdminGallery.module.css';

const AdminGallery = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [photoUrl, setPhotoUrl] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    const handleUpload = async (e) => {
        const { name } = e.target;
        if (!file) return;
        const path = `/gallery/${name === 'image' ? 'images' : 'videos'}/${file.name}`;
        const ref = storage.ref(path);
        await ref.put(file);
        const photoUrl = await ref.getDownloadURL();
        setPhotoUrl(photoUrl);
        setFileName(file.name);
        setFile(null);
    };

    const submitResult = async (e) => {
        if (!photoUrl || !fileName) {
            alert("Kindly upload an image first");
            return;
        }
        const { name } = e.target;
        const id = randomString();
        const ref = name === "image" ? 'galleryimages' : 'galleryvideos';
        await db.collection(ref).doc(id).set({
            photoUrl: photoUrl,
            pathName: fileName
        });
        setPhotoUrl("");
    };

    const handleDelete = async (id, fileName) => {
        await storage.ref(`/gallery/images/${fileName}`).delete();
        await db.collection("galleryimages").doc(id).delete();
    };

    const randomString = () => {
        let result = "";
        let length = 20;
        let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };

    return (
        <div className={styles.container}>
            <div>
                <div>Upload Image</div>
                <input type="file" name='image' onChange={handleChange} />
                <button name='image' onClick={handleUpload} disabled={!file}>Upload to Cloud</button>
            </div>
            <div><img src={photoUrl} alt="" style={{ width: "10%" }} /></div>
            <div><button name='image' className="hom__sub" disabled={!photoUrl || !fileName} onClick={submitResult}>
                Submit
            </button></div>
            <div>
                <div>Upload Video</div>
                <input type='file' name='video' onChange={handleChange}></input>
                <button name='video' onClick={handleUpload} disabled={!file}>Upload to Cloud</button>
            </div>
            <div><video src={photoUrl} alt="" style={{ width: "10%" }} /></div>
            <div><button name='video' className="hom__sub" disabled={!photoUrl || !fileName} onClick={submitResult}>
                Submit
            </button></div>
        </div>
    );
};

export default AdminGallery;
