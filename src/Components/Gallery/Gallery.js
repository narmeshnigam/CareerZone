import React, { useState, useEffect } from 'react'
import './Gallery.css'
import db from '../../firebase';

const Gallery = () => {

  const [imgUrls, setImgUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      db.collection('galleryimages').onSnapshot(snapshot => {
        setImgUrls(snapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().photoUrl,
          fileName: doc.data().pathName
        })));
      });
    };
    const fetchVideos = async () => {
      db.collection('galleryvideos').onSnapshot(snapshot => {
        setVideoUrls(snapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().photoUrl,
          fileName: doc.data().pathName
        })));
      });
    };

    fetchImages();
    fetchVideos();
  }, []);

  return (
    <div className='gal__container'>
      <div className='gal__banner'>
        {/* <img src="./GalleyBanner.png" alt=''></img> */}
      </div>
      <div className='gal__photo__container'>
        <div className='gal__photos__heading'>
          Photos
          <img src='./dropdownarrow.png' ></img>
        </div>
        <div style={{marginTop:'2rem'}} className='gal__photos__con__img'>
        {imgUrls.map((img) => (
            <img src={img.url} alt="slide_image" />
        ))}
        </div>
      </div>
      <div className='gal__video__container'>
        <div className='gal__photos__heading'>
          Videos
          <img src='./dropdownarrow.png'></img>
        </div>
        <div style={{marginTop:'2rem'}} className='gal__photos__con__img'> 
        {videoUrls.map((data) => (
            <video controls>
              <source src={data.url} type="video/mp4"/>
            </video>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gallery
