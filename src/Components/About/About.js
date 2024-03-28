import React from 'react';
import './About.css';
//import aboutImage from 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';



const About = () => {
    return (
        <div>
            <div className='head'>
                <h1 className='value'>About</h1>
            </div>
        
        
        
        <div className="about">
          
          <div className="image">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="About Us" />
          </div>
          <div className="content">
            <h2>About Us</h2>
            <h1>We Provide Digital Solutions for Your Business. </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using readable English looking at its layout.</p>
            
            <div className="awards">
              <h3>Awards</h3>
              <ul>
                <li>No. Of College</li>
                <li>No. Of University</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    );


}
export default About;