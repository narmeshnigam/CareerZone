import React, { useState, useEffect } from 'react';
import styles from './AdminCourses.module.css';
import db from "../../../firebase";
import Loading from '../Loading/Loading';

const AdminCourses = () => {

  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false)

  const [college, setCollege] = useState({
    name:'',
    district:'',
    state:'',
    nac:''
  })
  const [courseData, setCourseData] = useState({
    name: '',
    backgroundImage: '',
    aboutText: '',
    eligibilityText: [],
    scopeText: [],
    collegeOfferCourse: [],
    suggestionOfCourse: [],
    courseCategory: '',
    after10th: false,
    after12th: false
  });

  useEffect(() => {
    const fetchImages = async () => {
        db.collection('courses').onSnapshot(snapshot => {
            setCourse(snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name
            })));
        });
    };
    
    fetchImages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setCollege({ ...college, [name]: newValue });
  };

  const handleClick = () => {
    setCourseData({
      ...courseData,
      collegeOfferCourse: [...courseData.collegeOfferCourse, college]
    });
    setCollege({
      name:'',
      district:'',
      state:'',
      nac: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setCourseData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

     


  const handleArrayAddition = (fieldName, promptMessage) => {
    const newText = prompt(promptMessage);
    if (newText) {
      setCourseData(prevState => ({
        ...prevState,
        [fieldName]: [...prevState[fieldName], newText]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await db.collection('courses').add(courseData);
      setCourseData({
        name: '',
        backgroundImage: '',
        aboutText: '',
        eligibilityText: [],
        scopeText: [],
        collegeOfferCourse: [],
        suggestionOfCourse: [],
        courseCategory: '',
        after10th: false,
        after12th: false
      });
    } catch (error) {
      console.error('Error adding course: ', error);
    }
    setLoading(false)
  };

  const handleDelete = async (id) => {
    await db.collection("courses").doc(id).delete();
  };


  return (
    <>
    <div style={{ position: 'absolute', backgroundColor: '#00000021' , height: '100vh'}}>{loading === true ? <Loading /> : ''}</div>
    <div className={styles['admin-courses__container']}>
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={courseData.name} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Background Image URL:
          <input type="text" name="backgroundImage" value={courseData.backgroundImage} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          About Text:
          <textarea name="aboutText" value={courseData.aboutText} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Eligibility Text:
          <ul>
            {courseData.eligibilityText.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <button type="button" onClick={() => handleArrayAddition('eligibilityText', 'Enter eligibility text:')}>
            Add Eligibility
          </button>
        </label>
        <label>
          Scope Text:
          <ul>
            {courseData.scopeText.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <button type="button" onClick={() => handleArrayAddition('scopeText', 'Enter scope text:')}>
            Add Scope
          </button>
        </label>
        <label >Enter College details:
              <input type='text' placeholder='Name of college' name={'name'} value={college.name} onChange={(e) => handleInputChange(e)} />
              <input type='text' placeholder='District' name={'district'} value={college.district} onChange={(e) => handleInputChange(e)} />
              <input type='text' placeholder='State' name={'state'} value={college.state} onChange={(e) => handleInputChange(e)} />
              <label style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>NAC Accredited
                <input type="checkbox" name={'nac'} checked={college.nac} onChange={(e) => handleInputChange(e)} />
              </label>
          <button type="button" onClick={handleClick}>Add College</button>
        </label>
        <label>
          Suggested Course:
          <ul>
            {courseData.suggestionOfCourse.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <button type="button" onClick={() => handleArrayAddition('suggestionOfCourse', 'Enter Suggested course text:')}>
            Add Suggestion of Course
          </button>
        </label>
        <label>
          Course Category:
          <input type="text" name="courseCategory" value={courseData.courseCategory} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          <div>
            Courses After class 10th
            <input type="checkbox" name="after10th" checked={courseData.after10th} onChange={(e) => handleChange(e)} />
          </div>
        </label>
        <label>
          <div>
            Courses After class 12th
            <input type="checkbox" name="after12th" checked={courseData.after12th} onChange={(e) => handleChange(e)} />
          </div>
        </label>
        <button type="submit">Add Course</button>
      </form>
    </div>
    <div className={styles.table}>
      <table>
          <tr>
              <th>S.No</th>
              <th>Course Name</th>
              <th>Delete Course</th>
          </tr>
          {course.map((data, i) => (
              <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td><button onClick={() => handleDelete(data.id)}>delete</button></td>
              </tr>
          ))}
      </table>
    </div>
    </>
  );
};

export default AdminCourses;
