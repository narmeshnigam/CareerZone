import React, {useState} from 'react'
import db from '../../firebase.js'
import "./Contact.css"

const Contact = () => {

  const [data, setData] = useState({
    name: '', 
    email: '',
    phone: '',
    enquire: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const clickOnContactform = async (e) => {
    e.preventDefault();
    try {
      await db.collection('quickApply').add(data);
      alert('Your Message is delivered.');
      setData({
        name: '', 
        email: '',
        phone: '',
        enquire: '',
        message: '',
      });
    } catch (error) {
      console.error('Error adding course: ', error);
    }
  };

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
                <input type="text" value={data.name} id="name" name="name" onChange={handleChange} placeholder="Enter Your Name" required/>
              </div>
              <div>
                <label for="email" className="custom-label">Email:</label>
                <input type="email" value={data.email} id="email" onChange={handleChange} name="email" placeholder="email@example.com" required/>
              </div>
              <div>
                <label for="phone" className="custom-label">Phone:</label>
                <input type="number" value={data.phone} id="phone" onChange={handleChange} name="phone" placeholder="01234 56789" required/>
              </div>
              <div>
                <label for="enquire" className="custom-label">Enquire:</label>
                <select name="enquire" value={data.enquire} onChange={handleChange} id="enquire">
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
                <textarea id="message" value={data.message} onChange={handleChange} name="message" rows="4" placeholder="Enter Your Query Here"></textarea>
              </div>

              <div>
                <button onClick={clickOnContactform}>Submit</button>
              </div>
            </form>
        </div>
        <div className="carrer__container__form__column">
          <div className="carrer__container__backImg"></div>
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
