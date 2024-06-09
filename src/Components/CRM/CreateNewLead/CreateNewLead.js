
import { React, useEffect, useState } from 'react';
import styles from './CreateNewLead.module.css';
import { Link } from 'react-router-dom';
import db from "../../../firebase";

const CreateNewLead = () => {
  useEffect(()=>{
    const scrollTop = () => {
      window.scrollTo(0, 0);
    }
    scrollTop();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    leadNumber: '',
    mobileNumber: '',
    alternateMobile: '',
    state : '',
    city: '',
    pin: '',
    locality: '',
    college: '',
    courseInterest: '',
    bscc : '',
    relation : '',
    source: '',
    budget: '',
    createdDate: '', 
    assignmentDate: '', 
    createdBy: '',
    assignedTo: '', 
    assignedBy: '', 
    remarks: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const currentDate = new Date().toLocaleDateString();
    const currentUser = 'nishu'; 
    const leadNumber = await generateLeadNumber();

    const leadData = {
      ...formData,
      leadNumber: leadNumber,
      createdDate: currentDate,
      createdBy: currentUser,
      assignmentDate: currentDate,
      assignedBy: currentUser,
    };

    // Save data to Firebase
    db.collection('leads').add(leadData)
      .then(() => {
        console.log('Lead added successfully!');
      })
      .catch((error) => {
        console.error('Error adding lead: ', error);
      });

    setFormData({
      name: '',
      email: '',
      leadNumber: '',
      mobileNumber: '',
      alternateMobile: '',
      state : '',
      city: '',
      pin: '',
      locality: '',
      college: '',
      courseInterest: '',
      bscc : '',
      relation : '',
      source: '',
      budget: '',
      createdDate: '', 
      assignmentDate: '', 
      createdBy: '',
      assignedTo: '', 
      assignedBy: '', 
      remarks: '',
    });
  };

  const generateLeadNumber = async () => {
    const counterDoc = db.collection('counters').doc('leadCounter');
    
    try {
      const leadNumber = await db.runTransaction(async (transaction) => {
        const counterSnapshot = await transaction.get(counterDoc);
        if (!counterSnapshot.exists) {
          transaction.set(counterDoc, { currentLeadNumber: 1 });
          return '000001';
        } else {
          const currentLeadNumber = counterSnapshot.data().currentLeadNumber;
          const newLeadNumber = currentLeadNumber + 1;
          transaction.update(counterDoc, { currentLeadNumber: newLeadNumber });
          return newLeadNumber.toString().padStart(6, '0');
        }
      });
  
      return leadNumber;
    } catch (error) {
      console.error('Transaction failed: ', error);
      throw new Error('Could not generate lead number');
    }
  };
  

  const assignedToOptions = [
    { value: 'nishi', label: 'nishi' }
  ];

  return (
    <div className={styles.lead_page_container}>
      <div className={styles.lead_page_heading}>
        <div className={styles.lead_pagehome_ic}>
          <Link to="/"> 
            <div className={styles.lead_pagehome_ic}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="60"
                height="60"
              >
                <path d="M12 2L1 11h3v9h6v-6h4v6h6v-9h3L12 2zm2 16h-4v-6H8v6H4v-8.811L12 4.415l8 8.774V18h-4v-6h-4v6z" />
              </svg>
            </div>
          </Link>
        </div>
        <div className={styles.lead_pagehomeheading_}>
          Create New Lead
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input__container}>
          <div className={styles.address__info}>
            Personal Information :
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="alternateMobile"
              name="alternateMobile"
              placeholder="Alternate Mobile Number"
              value={formData.alternateMobile}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
        </div>
        <div className={styles.input__container}>
          <div className={styles.address__info}>
            Address Information :
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="locality"
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="pin"
              name="pin"
              placeholder="Pin"
              value={formData.pin}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          
        </div>
        <div className={styles.input__container}>
          <div className={styles.additional_info_heading}>
            Additional Information :
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="college"
              name="college"
              placeholder="College Choice"
              value={formData.college}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="courseInterest"
              name="courseInterest"
              placeholder="Course Interest"
              value={formData.courseInterest}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="bscc"
              name="bscc"
              placeholder="BSCC"
              value={formData.bscc}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="relation"
              name="relation"
              placeholder="Relation To Condidate"
              value={formData.relation}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <input
              type="text"
              id="source"
              name="source"
              placeholder="Source"
              value={formData.source}
              onChange={handleInputChange}
              className={styles.input__field}
            />
          </div>
          <div className={styles.address__line}>
            <input
              type="text"
              id="remarks"
              name="remarks"
              placeholder="Remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className={styles.input__field}
            />
            <select
                id="assignedTo"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleInputChange}
                className={styles.input__field}
            >
           <option value="">Assigned To</option>
           {assignedToOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
            ))}
            </select>
          </div>
          <button type="submit" className={styles.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewLead;
