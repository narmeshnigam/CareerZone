import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {

  const[photo, setPhoto] = useState(false);
  const[video, setVideo] = useState(false);

  const checkPhoto = () =>{
    if(photo === true)
    setPhoto(false)
    else
    setPhoto(true)
  }
  const checkVideo = () =>{
    if(video === true)
    setVideo(false)
    else
    setVideo(true)
  }

  return (
    <div className='gal__container'>
      <div className='gal__banner'>
        <img src="./GalleyBanner.png" alt=''></img>
      </div>
      <div className='gal__photo__container'>
        <div className='gal__photos__heading'>
          Photos
          <img src='./dropdownarrow.png' onClick={() => checkPhoto()}></img>
        </div>
        <div style={{display: photo === true ?'flex': 'none', marginTop:'2rem'}} className='gal__photos__con__img'>
          <img src='https://images.freeimages.com/images/large-previews/8de/missing-link-1519399.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/0bd/fence-1182808.jpg?fmt=webp&w=500' alt=''></img>
        </div>
        {/* <div style={{display: photo === true ?'flex': 'none', marginTop:'2rem'}} className='gal__photos__con__img'>
          <img src='https://images.freeimages.com/images/large-previews/8de/missing-link-1519399.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/0bd/fence-1182808.jpg?fmt=webp&w=500' alt=''></img>
        </div> */}
        {/* <div style={{display: photo === true ?'flex': 'none', marginTop:'2rem'}} className='gal__photos__con__img'>
          <img src='https://images.freeimages.com/images/large-previews/8de/missing-link-1519399.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&h=350' alt=''></img>
          <img src='https://images.freeimages.com/images/large-previews/0bd/fence-1182808.jpg?fmt=webp&w=500' alt=''></img>
        </div> */}
      </div>
      <div className='gal__video__container'>
        <div className='gal__photos__heading'>
          Videos
          <img src='./dropdownarrow.png' onClick={() => checkVideo()}></img>
        </div>
        <div style={{display: video === true ?'flex': 'none', marginTop:'2rem'}} className='gal__photos__con__img'>
          <iframe src="https://www.youtube.com/embed/Gz38Yj09k3A?si=qvvwnyZnHndi_J0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/N1s-GN1SWqY?si=T-Pbxo9Wph2SIuPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/I1nMJ6M6F50?si=_QOJ5QcZbtS_q_Rz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </div>
       
      </div>
    </div>
  )
}

export default Gallery
