import React from "react";
import "./StudentCreditCard.css";
import CoursesTable from "./CoursesTable/CoursesTable";
import ApplicationForm from "./CoursesTable/applicationFormStatements"; // Assuming ApplicationForm component is in a file named 'ApplicationForm.js'

const StudentCreditCard = () => {
  return (
    <div className="services__container">
      {/*<div className="services_top_img">
        <div>Student Credit Card</div>
      </div>*/}
      <div className="education_objective_container">
        <img
          src="https://thecareerzone.co.in/newimage/studentcreditcart.png"
          alt=""
        />
      </div>

      <div className="objective__">
        <div className="objective__image">
          <img
            src="https://www.authenticom.fr/wp-content/uploads/2021/05/20943580-scaled.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div className="objective__content">
          <div>
            <div>
              <ul>
                {" "}
                <li>
                  Bihar Student Credit Card Yojana 2021: Candidates can check
                  their BSSC application status now. The Bihar Student Credit
                  Card Yojana was launched on 2nd October 2016. This is a loan
                  scheme that helps the students to pursue higher studies. This
                  Credit Card Scheme is also known as the “MNSSBY Bihar Student
                  Credit Card Scheme“.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                {" "}
                <li>
                  The main aim of introducing this Credit Card yojana is to
                  bridge the gap between the “Gross Enrollment Ratio” in Bihar
                  and in other parts of India.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                {" "}
                <li>
                  The Government has implemented this Yojana so that the
                  students don’t stop studying due to their financial issues.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                {" "}
                <li>
                  The mode of applying for the Bihar Credit Card is online only
                  on its official website. However, to apply for this Credit
                  Card yojana, you need to fulfill certain eligibility
                  conditions and other identification procedures.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="student_eligibility_">
        <div className="student_eligibility_heading">Student Eligibility </div>
        <div className="student_eligibility_content">
          <ul>
            <li>Should be an Indian national.</li>
            <li>Should be resident of Bihar with Maximum age of 25 Years.</li>
            <li>
              {" "}
              Intermediate exam passed student from Institutions recognized from
              Bihar School Exam Committee, 12th passed student from Institution
              recognised by Central Board of Secondary Education or Equivalent
              boards, Sub-Shastri passed students from Institutions recognized
              by Bihar State Sanskrit Education Board and Moulvi passed student
              from recognized Institute by Bihar State Madarsa Board will also
              be facilitated under this scheme. These Educational Institutes
              must compulsorily be located /situated in Bihar.
            </li>
            <li>
              {" "}
              If applicant is a degree holder of one level he will not be
              covered for degree of the same level under this scheme. This will
              not be applicable to technical and management courses. For
              instance, under this scheme, the loan shall not be provided to
              science graduate degree holder for pursuing graduate level courses
              for studying again in any other Faculty of Arts, Science or
              Commerce. But will be eligible for pursuing higher education under
              courses like MBA or MCA.
            </li>
            <li>
              CIBIL score of the student shall be more than or equal to 700. In
              case CIBIL score is lower than 700 it will be sanctioned by next
              higher authority.
            </li>
            <li>
              Student should have been enrolled or selected for enrolment for
              pursuing higher education in the educational institutions
              recognized by concerned regulatory boards/ agencies of Bihar Govt.
              or other state Govts. or Central Govt.
            </li>
            <li>
              {" "}
              Loan application will be received only if student have UID or
              Aadhar Card Number.
            </li>
            <li>
              {" "}
              Loan will be disbursed only for students having valid Permanent
              Account Number (PAN Card)Institutes Eligible for Studies:
            </li>
            <li>
              {" "}
              Educational institutions recognized by concerned regulatory
              boards/ agencies of Bihar Govt. or other State Govts. or Central
              Govt.
            </li>
          </ul>
        </div>
      </div>

      <div className="courses_eligible">
        <div className="courses__1">
          Courses Applicable for Bihar Student Credit Card:
        </div>
        <CoursesTable />
      </div>
      <div className="stud__cred__list__btn">
        <a
          target="blank"
          href="https://www.7nishchay-yuvaupmission.bihar.gov.in/listofcollegedetail"
        >
          <p  onClick={() => (window.location.href = "/college/:name")}
            style={{
              fontSize: "22px",
              backgroundColor: "#333",
              color: "#fbfeff",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            View list of college details{" "}
          </p>
        </a>
      </div>
      <div
        className="applicationStatus__1"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          margin: "20px",
        }}
      >
        <div className="status_heading">
          Bihar Student Credit Card Application Status
        </div>
        <div className="status__container">
          After submitting the form, you can check the status of your
          registration form. The Application Status will help you to track down
          your registration form.
          <br /> The process to check the status is available online only. Thus,
          the steps to check the application status of BSCC is available below.
          <img
            src="https://pngimg.com/uploads/credit_card/credit_card_PNG102.png"
            className="right_image"
          />
        </div>
        <div className="status_container_1">
          How to Check Bihar Student Credit Card Form Status?
        </div>
        <div>
          <div className="status_container_2">
            You can check the application form status of the BSCC Form in two
            ways –
          </div>
          <ApplicationForm />
        </div>
      </div>

      <div className="credit_card_scheme">
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div className="credit_cardscheme_heading">
            Documents Required for the Bihar Student Credit Card Scheme :
          </div>
          <div className="credit_3_">
            The following documents are required for the Bihar Student Credit
            Card Yojana 2021 :–
          </div>
          <div className="credit_cardscheme_pa">
            <ul>
              <li>Mark Sheet of 10th and 12th Class</li>
              <li>Residential Certificate of the candidate</li>
              <li>
                Detailed Document of Fee for Higher Education, issued by the
                Institute.
              </li>
              <li>
                Selection Certificate from the recognized Institute for Higher
                Education
              </li>
              <li>PAN Card</li>
              <li>
                Self-Attested Copies of the application form with passport-size
                photographs
              </li>
              <li>Last 6 months bank statement of your parent’s</li>
              <li>Income Tax Return of the last two years</li>
              <li>
                {" "}
                Other Identification Documents such as Aadhaar Card/Voter ID
                Card/Passport/ Driving License etc.
              </li>
            </ul>
          </div>
        </div>

        <div className="loan__">
          <div className="loan__heading">
            <div
              
            >
              Loan Approval Process for Bihar Student Credit Card Card :-
            </div>
            <div className="loan_content_1">
              <ul>
                <li>
                  After submitting all the documents successfully, the
                  Government then verifies all the documents. The BSCC Credit
                  Card verification process takes around 10 to 15 days after
                  receiving the documents from the student. Thereafter, the
                  successful verification of the documents, the details are then
                  transferred to the banks which then approve or disapprove the
                  loan.
                </li>
                <li>
                  However, the approval and disapproval of the loan are shared
                  by the banks through SMS on registered mobile number shared at
                  the process of form filling. So, once, the loan is approved,
                  the applicant has to visit the bank branch to complete the
                  rest of the formalities.
                </li>
              </ul>
            </div>
            <div className="loan__heading">
              Interest Rates of MNSSBY Bihar Student Credit Card :-
            </div>
            <div className="loan_content_1">
              <ul>
                <li>
                  The Interest Rates for the Bihar Student Credit Card Yojana
                  vary with the banks. Earlier, the Interest Rate of Canara Bank
                  was 12% and Madhya Bihar Gramin Bank was 12.5% per year. But
                  according to the latest information, the Bihar Government is
                  providing loan at 4% simple interest. However, 1% is for the
                  women, PWD, and transgender, through “Bihar Student Education
                  Finance Corporation”.
                </li>
                <li>
                  Moreover, no interest is applicable for the course duration of
                  4 years (B. Tech) plus an additional year. Therefore, you need
                  to pay your loan after 5 years of admission to the course in
                  installments. However, you can also extend the deadline, by
                  informing the DRCC. All you have to do is write an application
                  form twice a year (July and December).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interest_rate_">
          <div className="interest_rate_heading">
            <div className="interest_rate_image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH37scGd_xes5hd-GAXCoGmOwtXPWWQzWkUnc49wIstw&s"
                alt=""
                height="30vh"
              />
            </div>
            <div>Highlights of Bihar Student Credit Card Yojana 2021 :</div>
          </div>
          <div className="interest_rate_content">
            The Bihar Credit Card Yojana Scheme is introduced by the Bihar
            Government. The Scheme offers Loans to the students who have passed
            12th class and want to pursue higher education. Under this Bihar
            Student Credit Card Scheme, candidates can avail of loan up to 4
            lakhs from the bank. The Online Registration Process for the MNSSBY
            Bihar Student Credit Card Card is available on App/Portal. Check
            Scholarships in India
          </div>
          <div className="purpose__1">Purpose :-</div>
          <div className="credit_cardscheme_pa">
            <ul>
              <li>Fee payable to college++/ school/ hostel</li>
              <li> Examination/ Library/ Laboratory fee</li>
              <li>Insurance premium for student borrower</li>
              <li>
                Caution deposit, Building fund / refundable deposit supported by
                Institution bills/receipts.{" "}
              </li>
              <li>Purchase of books/ equipment / instruments / uniforms</li>
              <li>
                Purchase of computer at reasonable cost, if required for
                completion of the course
              </li>
              <li>
                {" "}
                Any other expense required to complete the course - like study
                tours, project work, thesis, etc.
              </li>
              <li>
                While computing the loan required, scholarships, fee waiver
                etc., if any available to the student borrower may be taken into
                account. If the scholarship component is included in the loan
                assessment, it may be ensured that the scholarship amount gets
                credited to the loan account when received from the Government.
              </li>
            </ul>
          </div>
          <div className="note__1">
            <strong>Notes:</strong> ++ For courses under Management quota seats
            considered under the scheme, fees as approved by the State
            Government/Government approved regulatory body for payment seats
            will be taken, subject to viability of repayment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCreditCard;
