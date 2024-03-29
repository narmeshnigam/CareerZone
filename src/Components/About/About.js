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
                       <div>
                            <h2>Awards</h2>
                            <h1>800+</h1>
                        </div>
                        <div>
                            <h2>Awards</h2>
                            <h1>1200+</h1>
                        </div>
                        <div>
                            <h2>Awards</h2>
                            <h1>12+</h1>
                        </div>
                        
              </div>
          </div>
        </div>
        <div className='section2'>
  <div className='sec2'>
    <div className='content'>
      <h1>We Help to Create Strategies, Design</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
      <div className='di'>
        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
      </div>
    </div>
    <div className='image3'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrvhb1mwTSR7c00aeAvPLQwzHSVJuuFgpwAevjmy6GA&s" alt='' />
    </div>
  </div>
</div>

        </div>
    );


}
export default About;