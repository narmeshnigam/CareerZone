




import React, { useState, useEffect } from "react";
import db from "../../../firebase";
import styles from "./FollowUpPage.module.css";
import FollowCard from "./Card/FollowCard";
import { useParams } from "react-router-dom";


const FollowUpPage = () => {
  const { id } = useParams();
  const [leads, setLeads] = useState({});
  const [followUpArr, setFollowUpArr] = useState([]);
  const [followUp, setFollowUp] = useState({
    summary: "",
    statement: "",
    status: "",
    transferto: "",
    nextdate: "",
    remarks: "",
  });

  const [lastFollowUpNo, setLastFollowUpNo] = useState(12999);
  const [lastLeadNo, setLastLeadNo] = useState(999);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    fetchLeadData();
    fetchLastNumbers();
  }, []);

  useEffect(() => {
    if (leads.leadNumber) {
      fetchFollowUpData();
    }
  }, [leads]);

  const fetchLeadData = async () => {
    try {
      const leadDoc = await db.collection('leads').doc(id).get();
      if (leadDoc.exists) {
        setLeads(leadDoc.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };

  const fetchFollowUpData = async () => {
    db.collection("followUp")
      .where("leadNo", "==", leads.leadNumber)
      .onSnapshot((snapshot) => {
        setFollowUpArr(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            followUpNo: doc.data().followUpNo,
            leadNo: doc.data().leadNo,
            followUpBy: doc.data().followUpBy,
            createdDate: doc.data().createdDate,
            nextdate: doc.data().nextdate,
            remarks: doc.data().remarks,
            statement: doc.data().statement,
            status: doc.data().status,
            summary: doc.data().summary,
            transferto: doc.data().transferto,
          }))
        );
      });
  };

  const fetchLastNumbers = async () => {
    const followUpSnapshot = await db
      .collection("followUp")
      .orderBy("followUpNo", "desc")
      .limit(1)
      .get();
    const leadSnapshot = await db
      .collection("followUp")
      .orderBy("leadNo", "desc")
      .limit(1)
      .get();

    if (!followUpSnapshot.empty) {
      setLastFollowUpNo(parseInt(followUpSnapshot.docs[0].data().followUpNo));
    }
    if (!leadSnapshot.empty) {
      setLastLeadNo(parseInt(leadSnapshot.docs[0].data().leadNo));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newStatus = followUp.status;
    if (name === "statement") {
      if (
        value === "Response Received & Finalised" ||
        value === "Response Received & not interested anymore"||
        value === "Contacted & Invalid Number"
      ) {
        newStatus = "Closed 🔴";
        setIsDisabled(true); 
      } else {
        newStatus = "Open 🟢";
        setIsDisabled(false); 
      }
    }

    setFollowUp({
      ...followUp,
      [name]: value,
      status: newStatus,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    const currentUser = "nishu";
    const followUpNumber = generateFollowUpNo();
    const leadNumber = generateLeadNo();

    const followUpData = {
      ...followUp,
      leadNo: leads.leadNumber,
      followUpNo: followUpNumber,
      createdDate: currentDate,
      followUpBy: currentUser,
    };

    try {
      await db.collection("followUp").add(followUpData);
      setFollowUp({
        summary: "",
        statement: "",
        status: "",
        transferto: "",
        nextdate: "",
        remarks: "",
      });
      setIsDisabled(false);
    } catch (error) {
      console.error("Error adding follow-up: ", error);
    }
  };

  const generateFollowUpNo = () => {
    const newFollowUpNo = (lastFollowUpNo + 1).toString();
    setLastFollowUpNo(lastFollowUpNo + 1);
    return newFollowUpNo;
  };

  const generateLeadNo = () => {
    const newLeadNo = (lastLeadNo + 1).toString();
    setLastLeadNo(lastLeadNo + 1);
    return newLeadNo;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        Lead Info #{leads.leadNumber}
      </div>
      <div className={styles.leadInfoContainer}>
        <div className={styles.leadHead}>
          {/* Displaying lead info */}
          <div>
            <div>Lead No: </div>
            <div>{leads.leadNumber}</div>
          </div>
          <div>
            <div>Name: </div>
            <div>{leads.name}</div>
          </div>
          <div>
            <div>Mobile Number: </div>
            <div>{leads.mobileNumber}</div>
          </div>
          <div>
            <div>Alternate Mobile Number: </div>
            <div>{leads.alternateMobile}</div>
          </div>
          <div>
            <div>Email Address: </div>
            <div>{leads.email}</div>
          </div>
          <div>
            <div>Course: </div>
            <div>{leads.courseInterest}</div>
          </div>
          <div>
            <div>College: </div>
            <div>{leads.college}</div>
          </div>
          <div>
            <div>Budget: </div>
            <div>{leads.budget}</div>
          </div>
          <div></div>
          <div>
            <div>Address: </div>
            <div>
              {leads.city}, {leads.state}, {leads.locality}, {leads.pin}
            </div>
          </div>
          <div>
            <div>Bscc: </div>
            <div>{leads.bscc}</div>
          </div>
          <div>
            <div>Relation To Candidate: </div>
            <div>{leads.relation}</div>
          </div>
          <div>
            <div>Created Date: </div>
            <div>{leads.createdDate}</div>
          </div>
          <div>
            <div>Created By: </div>
            <div>{leads.createdBy}</div>
          </div>
          <div>
            <div>Assigned To: </div>
            <div>{leads.assignedTo}</div>
          </div>
          <div>
            <div>Assigned By: </div>
            <div>{leads.assignedBy}</div>
          </div>
          <div>
            <div>Assigned Date: </div>
            <div>{leads.assignmentDate}</div>
          </div>
        </div>
      </div>
      <div className={styles.followHistoryContainer}>
        <div className={styles.followHisHeading}>Follow Up History</div>
        <div className={styles.followCardContainer}>
          {followUpArr.map((data) => (
            <FollowCard
              key={data.id}
              currDate={data.createdDate}
              createdBy={data.followUpBy}
              summary={data.summary}
              statement={data.statement}
              status={data.status}
              transferto={data.transferto}
              nextdate={data.nextdate}
              followUpStatus={data.status}
            />
          ))}
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <button className={styles.followCardbtn}>Load More</button>
        </div>
      </div>
      <div className={styles.followHistoryContainer}>
        <div className={styles.followHisHeading}>Create New Follow-up</div>
        <div style={{ gap: "2rem" }} className={styles.followCardContainer}>
          <textarea
            name="summary"
            onChange={handleChange}
            value={followUp.summary}
            rows={4}
            placeholder="Write Follow-up Summary"
          />
          <select
            name="statement"
            onChange={handleChange}
            value={followUp.statement}
          >
            <option value="" disabled>
              Select a Follow-up Statement
            </option>
            <option value="Response Received & Finalised">
              Response Received & Finalised
            </option>
            <option value="Response Received & Postponed">
              Response Received & Postponed
            </option>
            <option value="Response Received & not interested anymore">
              Response Received & not interested anymore
            </option>
            <option value="Contacted & Follow-up Scheduled">
              Contacted & Follow-up Scheduled
            </option>
            <option value="Contacted & Not Responding">
              Contacted & Not Responding
            </option>
            <option value="Contacted & Switch-off">
              Contacted & Switch-off
            </option>
            <option value="Contacted & Invalid Number">
              Contacted & Invalid Number
            </option>
            <option value="Not Contacted & Scheduled">
              Not Contacted & Scheduled
            </option>
            <option value="Not Contacted & Number Busy">
              Not Contacted & Number Busy
            </option>
          </select>
          <input
            type="date"
            name="nextdate"
            onChange={handleChange}
            value={followUp.nextdate}
            placeholder="Next Follow-up Date"
            disabled={isDisabled}
          />
          <textarea
            name="remarks"
            onChange={handleChange}
            value={followUp.remarks}
            rows={4}
            placeholder="Write Remarks"
            disabled={isDisabled}
          />
          <select
            name="transferto"
            onChange={handleChange}
            value={followUp.transferto}
            disabled={isDisabled}
          >
            <option value="" disabled>
              Transfer Follow-up To
            </option>
            <option value="Employee 1">Employee 1</option>
            <option value="Employee 2">Employee 2</option>
            <option value="Employee 3">Employee 3</option>
            <option value="Employee 4">Employee 4</option>
            <option value="Employee 5">Employee 5</option>
          </select>
          <button onClick={handleSubmit} className={styles.followCardbtn}>
            Save Follow-up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUpPage;
