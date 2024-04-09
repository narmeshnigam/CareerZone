import React from 'react'
import "./Contact.css"

const Contact = () => {
  const clickOnContactform = () => {
    alert('Your Message is delivered.')
  }
  return (
    <div className='career__contact__container'>
      <div className='carrer_contact__top__img'>
        <div>Contact Us</div>
      </div>
      <div className='carrer__Contact__main__container'>
      <div className="carrer__container__form">
        <div className="carrer__container__form__column">
            <i className="fas fa-user icon"></i>
            <h2>Contact Us</h2>
            <form>
              <div>
                <label for="name" className="custom-label">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" required/>
              </div>
              <div>
                <label for="email" className="custom-label">Email:</label>
                <input type="email" id="email" name="email" placeholder="email@example.com" required/>
              </div>
              <div>
                <label for="phone" className="custom-label">Phone:</label>
                <input type="number" id="phone" name="phone" placeholder="01234 56789" required/>
              </div>
              <div>
                <label for="courses" className="custom-label">Enquire:</label>
                <select name="courses" id="courses">
                  <option style={{display:'none'}} value="">Select</option>
                  <option value="ENGINEERING">ENGINEERING</option>
                  <option value="MEDICAL">MEDICAL</option>
                  <option value="PHARMA">PHARMA</option>
                  <option value="ARCHITECTURE">ARCHITECTURE</option>
                  <option value="MANAGEMENT">MANAGEMENT</option>
                  <option value="LAW">LAW</option>
                  <option value="FEEDBACK">FEEDBACK</option>
                  <option value="COMPLAIN">COMPLAIN</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label for="message" className="custom-label">Message:</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter Your Query Here"></textarea>
              </div>

              <div>
                <button onClick={()=> clickOnContactform()}>Submit</button>
              </div>
            </form>
        </div>
        <div className="carrer__container__form__column">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <div><i  className="fas fa-map-marker-alt icon"></i>
                <p><strong>Address: </strong>&nbsp;&nbsp;511, 5 Floor, Ashiana tower, Brajkishore Path, Near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001</p></div>
                <div><i className="fas fa-envelope icon"></i>
                <p><strong>Email:</strong> <a href="mailto:info@thecareerzone.co.in
                  " style={{color: "#fff"}}>info@thecareerzone.co.in</a>
                </p></div>
                <div><i class="fa fa-phone icon" style={{transform: "rotate(90deg)"}}></i>
                <p><strong>Contact No:</strong> <a href="http://www.example.com" target="_blank" style={{color: "#fff"}}>+91-6123500458 , +91-9304365563</a></p></div>
                
            </div>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Contact
