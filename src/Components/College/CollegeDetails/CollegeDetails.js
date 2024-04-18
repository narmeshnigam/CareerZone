import React, { useEffect, useState } from 'react'
import db from '../../../firebase';
import { useParams } from 'react-router-dom';
import './CollegeDetails.css';

const CollegeDetails = () => {
    const {name} =  useParams();
    const [college, setCollege] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {
    const fetchImages = async () => {
      db.collection("collegeData").where("name", "==", name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCollege(doc.data())
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    
    fetchImages();
  }, [name]);

    return (
        <div className='College__Details'>
            <div className='college_details_section1' style={{backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${college.backgroundImg})`}}>
                <div className='college_details_heading'>
                    {college.name}
                </div>
                <div className='contactUs__content12'>
                        <div>Phone No. - +91 {college.phoneNo}</div>
                        <div>Email :- {college.email}</div>
                        <div><i style={{padding:'0rem 1rem 0rem 0rem'}} className="fas fa-map-marker-alt icon"></i><strong>Address: </strong>&nbsp;&nbsp;{college.address}</div>
                </div>
            </div>
            <div className='college_details_section2'>
                <div className='college_detailssection2_content'>
                    <div className='college_detailssection2_heading'>About</div>
                    <div className='college_detailssection2_content1'>{college.about}</div>
                </div>
            </div>
            <div className='college_details_section3'>
                <div className='college_details_certifications'>Accrediations  and Certifications</div>
                <div className='college_detailscertifications_images'>
                    <ul>
                        {college.certifications?.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div class='available__courses'>
                <div class='available_courses_heading'>Available Courses</div>
                <div class='available_courses_tab'>
                    <table>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Domain</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {college.availableCourse?.map((data, i) => (
                                <tr key={i}>
                                <td>{i+1}</td>
                                <td>{data.name}</td>
                                <td>{data.duration}</td>
                                <td>{data.domain}</td>
                                <td>{data.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='college_details_section4'>
                <div className='college_detailssection4_heading'>Other Information</div>
                <div className='college__information'>
                    <ul>
                        {college.otherInfo?.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CollegeDetails;