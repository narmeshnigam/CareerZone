import React from 'react'
import './CollegeDetails.css';

const CollegeDetails = () => {
    return (
        <div className='College__Details'>
            <div className='college_details_section1'>
                <div className='college_details_heading'>
                    Sant Longowal Institute of Engineering and Technology
                </div>
                <div className='college_details_Info'>
                    <div className='college_details_contactUs'>
                        <div className='contactUs__heading12'>Contact Us</div>
                        <div className='contactUs__content12'>

                            <div className='call__details'>
                                Phone No. - +91 7764029102
                            </div>
                            <div>
                                Email :- nishukum1211@gmail.com
                            </div>
                        </div>


                    </div>
                    <div className='college_details_collegeAddress'>
                        <div className='college_address_de1'>College Address</div>
                        <div className='college_address_de'>
                            <p><i style={{padding:'0rem 1rem 0rem 0rem'}} className="fas fa-map-marker-alt icon"></i><strong>Address: </strong>&nbsp;&nbsp;511, 5 Floor, Ashiana tower, Brajkishore Path, Near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001</p></div>



                    </div>
                </div>
            </div>
            <div className='college_details_section2'>
                <div className='college_detailssection2_content'>
                    <div className='college_detailssection2_heading'>About</div>
                    <div className='college_detailssection2_content1'>The institute is an autonomous body, fully funded by Govt. Of India and controlled by SLIET society, registered under Societies Registration Act, 1860. The institute awards its own Certificates, Diplomas, Undergraduate and Postgraduate approved and recognized by AICTE, New Delhi.</div><br />
                    <div className='college_detailssection2_content1'>The institute is an autonomous body, fully funded by Govt. Of India and controlled by SLIET society, registered under Societies Registration Act, 1860. The institute awards its own Certificates, Diplomas, Undergraduate and Postgraduate approved and recognized by AICTE, New Delhi.</div>
                </div>
            </div>
            <div className='college_details_section3'>
                <div className='college_details_certifications'>Accrediations  and Certifications</div>
                <div className='college_detailscertifications_images'>
                    <ul>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                    </ul>
                </div>
            </div>
            <div class='available__courses'>
                <div class='available_courses_heading'>Available Courses</div>
                <div class='available_courses_tab'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Domain</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B. Tech</td>
                                <td>4 years</td>
                                <td>Engineering</td>
                                <td>UG</td>
                            </tr>
                            <tr>
                                <td>D. Pharma</td>
                                <td>3 years</td>
                                <td>Medical</td>
                                <td>Diploma</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='college_details_section4'>
                <div className='college_detailssection4_heading'>Other Information</div>
                <div className='college__information'>
                    <ul>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                        <li>A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, a further education institution, or a secondary school.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CollegeDetails;