import React, { useState, useEffect } from "react";
import db from "../../../firebase";
import styles from "./FollowUpPage.module.css";
import FollowCard from "./Card/FollowCard";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

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

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("leads")
        .get()
        .then((querySnapshot) => {
          const arr = querySnapshot.docs;
          arr.forEach((doc) => {
            if (doc.id === id) setLeads(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };

    const fetchFollowUp = async () => {
      db.collection("followUp").onSnapshot((snapshot) => {
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

    fetchImages();
    fetchFollowUp();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFollowUp({ ...followUp, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString();
    const currentUser = "nishu";
    const followUpNumber = generateFollowUpNo();

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
      Swal.fire({
        title: "Success",
        text: "Follow-up data has been successfully added!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error adding follow-up data: ", error);
      Swal.fire({
        title: "Error",
        text: "There was an error adding follow-up data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const generateFollowUpNo = () => {
    return Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        Lead Info #{leads.leadNumber}
      </div>
      <div className={styles.leadInfoContainer}>
        <div className={styles.leadHead}>
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
            <div>Relation To Condidate: </div>
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
          {followUpArr.map((data, i) => (
            <FollowCard
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
            <option value="" disabled selected>
              Select a Follow-up Statement
            </option>

            <option value="Response Received & Finalised">
              Response Received & Finalised
            </option>
            <option value="Response Received & Postponed">
              Response Received & Postponed
            </option>
            <option value="Response Received & Need more Meetings">
              Response Received & Need more Meetings
            </option>
            <option value="Response Received & not interested anymore">
              Response Received & Not Interested Anymore
            </option>
            <option value="No Response">No Response</option>
          </select>

          <input
            name="nextdate"
            onChange={handleChange}
            value={followUp.nextdate}
            type="date"
            placeholder="Enter date"
          />
          <input
            name="status"
            onChange={handleChange}
            value={followUp.status}
            type="text"
            placeholder="Status"
          />
          <input
            name="remarks"
            onChange={handleChange}
            value={followUp.remarks}
            type="text"
            placeholder="Remarks"
          />
          <input
            name="transferto"
            onChange={handleChange}
            value={followUp.transferto}
            type="text"
            placeholder="Transfer to"
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-120px",
            }}
          >
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpPage;
