import React, { useState } from 'react';
import styles from './AdminCollegeDetails.module.css';
import db from '../../../firebase';

const AdminCollegeDetails = () => {

    const [course, setCourse] = useState({
        name:'',
        duration:'',
        domain:'',
        type:''
      })

    const [collegeData, setCollegeData] = useState({
        name: '',
        address: '',
        backgroundImg: '',
        email: '',
        phoneNo: '',
        about: '',
        certifications: [],
        availableCourse: [],
        otherInfo: [],
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setCourse({ ...course, [name]: newValue });
    };

    const handleClick = () => {
        setCollegeData({
          ...collegeData,
          availableCourse: [...collegeData.availableCourse, course]
        });
        setCourse({
            name:'',
            duration:'',
            domain:'',
            type:''
        });
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollegeData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCertificationAdd = () => {
        setCollegeData(prevState => ({
            ...prevState,
            certifications: [...prevState.certifications, ''] // Adding an empty string for new certification input
        }));
    };

    const handleOtherInfoAdd = () => {
        setCollegeData(prevState => ({
            ...prevState,
            otherInfo: [...prevState.otherInfo, ''] // Adding an empty string for new other info input
        }));
    };

    const handleCertificationChange = (index, value) => {
        const updatedCertifications = [...collegeData.certifications];
        updatedCertifications[index] = value;
        setCollegeData(prevState => ({
            ...prevState,
            certifications: updatedCertifications
        }));
    };

    const handleOtherInfoChange = (index, value) => {
        const updatedOtherInfo = [...collegeData.otherInfo];
        updatedOtherInfo[index] = value;
        setCollegeData(prevState => ({
            ...prevState,
            otherInfo: updatedOtherInfo
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await db.collection('collegeData').add(collegeData);
          alert('College Details added successfully!');
          setCollegeData({
            name: '',
            address: '',
            backgroundImg: '',
            email: '',
            phoneNo: '',
            about: '',
            certifications: [],
            availableCourse: [],
            otherInfo: [],
            category: ''
          });
        } catch (error) {
          console.error('Error adding course: ', error);
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.topheading}>Add New College</div>
            <div className={styles.formcontainer}>
                <div>Name</div>
                <input type='text' name='name' value={collegeData.name} onChange={handleChange} placeholder='Enter the Name of College' />
                <div>Background Image Url</div>
                <input type='text' name='backgroundImg' value={collegeData.backgroundImg} onChange={handleChange} placeholder='Enter the Image url' />
                <div>Contact Details</div>
                <input type='text' name='address' value={collegeData.address} onChange={handleChange} placeholder='Enter the Full Address of college' />
                <input type='number' name='phoneNo' value={collegeData.phoneNo} onChange={handleChange} placeholder='Enter contact Number' />
                <input type='email' name='email' value={collegeData.email} onChange={handleChange} placeholder='Enter Email for contact' />
                <div>About College</div>
                <input type='text' name='about' placeholder='About college' value={collegeData.about} onChange={handleChange} />
                <div>Accrediations and Certifications</div>
                {collegeData.certifications.map((cert, index) => (
                    <div key={index}>
                        <input type='text' value={cert} placeholder='Enter the Accrediations and Certifications' onChange={(e) => handleCertificationChange(index, e.target.value)} />
                    </div>
                ))}
                <button onClick={handleCertificationAdd}>Add Accrediations and Certifications</button>
                 <div>Available Courses</div>
                <input type='text' placeholder='Enter the Name of Course' name={'name'} value={course.name} onChange={(e) => handleInputChange(e)}/>
                <input type='number' placeholder='Enter the Duration of Course' name={'duration'} value={course.duration} onChange={(e) => handleInputChange(e)}/>
                <input type='text' placeholder='Enter the Domain of Course' name={'domain'} value={course.domain} onChange={(e) => handleInputChange(e)}/>
                <input type='text' placeholder='Enter the Type of Course' name={'type'} value={course.type} onChange={(e) => handleInputChange(e)}/>
                <button onClick={handleClick}>Add Course</button>
                <div>Other Information</div>
                {collegeData.otherInfo.map((info, index) => (
                    <div key={index}>
                        <input type='text' value={info} placeholder='Enter the Other Information' onChange={(e) => handleOtherInfoChange(index, e.target.value)} />
                    </div>
                ))}
                <button onClick={handleOtherInfoAdd}>Add Info</button>
                <div>Category of College</div>
                <input type='text' name='category' placeholder='Category of college' value={collegeData.category} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AdminCollegeDetails;
