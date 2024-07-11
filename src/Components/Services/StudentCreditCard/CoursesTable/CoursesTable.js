import React, { useState } from "react";
import "./CoursesTable.css";

const CoursesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 1, name: "Aalim" },
    { id: 2, name: "B.A./B. Sc./ B. Com. (All subject)" },
    { id: 3, name: "BCA" },
    {
      id: 4,
      name: "B. Sc. (Information Technology/Computer Application/Computer Science)",
    },
    { id: 5, name: "B. Sc. (Agriculture)" },
    { id: 6, name: "B. Sc. (Library Science)" },
    {
      id: 7,
      name: "Bachelor of Hotel Management & Catering Technology (B.H.M.C.T.)",
    },
    {
      id: 8,
      name: "B. Tech/B.E. for laterally admitted candidates having degree of three years diploma courses approved by the State Technical Education Council",
    },
    { id: 9, name: "Bachelor in Yoga (Entry Level+2Pass)" },
    { id: 10, name: "B. Tech/B.E./B. Sc.(Engineering-all branches)" },
    { id: 11, name: "B. Sc. (Nursing)" },
    { id: 12, name: "Bachelor of Pharmacy" },
    { id: 13, name: "Bachelor of Veterinary Medicine and Surgery (B.V.M.S.)" },
    { id: 14, name: "Bachelor of Ayurveda, Medicine and Surgery (B.A.M.S)" },
    { id: 15, name: "Bachelor of Unani Medicine & Surgery (B.U.M.S)" },
    { id: 16, name: "Bachelor of Homeopathic Medicine & Surgery (B.H.M.S.)" },
    { id: 17, name: "Bachelor of Dental Surgery (B.D.S.)" },
    { id: 18, name: "Bachelor of Physiotherapy" },
    { id: 19, name: "Bachelor of Occupational Therapy" },
    { id: 20, name: "Bachelor of Mass Communication/Mass Media/Journalism" },
    {
      id: 21,
      name: "B. Sc. in Fashion Technology/Designing/Apparel Designing/Footwear Designing",
    },
    { id: 22, name: "Bachelor of Architecture" },
    { id: 23, name: "Bachelor of Physical Education (B. P. Ed.)" },
    { id: 24, name: "B.A./B. Sc.-B. Ed. (Integrated Courses)" },
    { id: 25, name: "Bachelor of Business Administration (B.B.A.)" },
    { id: 26, name: "Bachelor of Fine Arts (B.F.A.)" },
    { id: 27, name: "BL/LLB (5 Year integrated Course)" },
    {
      id: 28,
      name: "Diploma in Hotel Management (Three Year) (I.H.M. Course)",
    },
    { id: 29, name: "Diploma in Food, Nutrition/ Dietetics" },
    { id: 30, name: "Diploma in Food Processing/ Food Production" },
    { id: 31, name: "Diploma in Food & Beverage Services" },
    {
      id: 32,
      name: "Degree/Diploma in Aeronautical, Pilot Training, Shipping",
    },
    { id: 33, name: "General Nursing Midwifery (G.N.M)" },
    { id: 34, name: "Hotel Management and Catering Technology" },
    { id: 35, name: "Hospital and Hotel Management" },
    { id: 36, name: "M.A./M. Sc./M. Com (All subject)" },
    { id: 37, name: "M.B.B.S." },
    { id: 38, name: "M. Sc/M. Tech Integrated course" },
    { id: 39, name: "M.A./M. Sc./M. Com (All subject)" },
    { id: 40, name: "Master of Business Administration (M.B.A.)" },
    { id: 41, name: "Polytechnic" },
    { id: 42, name: "Shashtri" },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < filteredCourses.length; i += 2) {
      rows.push(
        <tr key={i}>
          <td>{filteredCourses[i]?.id}</td>
          <td>
            <a className="linkfortalbe" href="/Popup">
              {filteredCourses[i]?.name}
            </a>
          </td>
          <td>{filteredCourses[i + 1]?.id}</td>
          <td>
            <a className="linkfortalbe" href="/Popup">
              {filteredCourses[i + 1]?.name}
            </a>
          </td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <br />
      <div className="courses-table-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        Search
      </div>
      <br />
      {filteredCourses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Courses</th>
              <th>S.No</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      ) : (
        <p>Can't find any courses</p>
      )}
    </div>
  );
};

export default CoursesTable;
