import React, {useState, useEffect} from 'react'
import db from '../../../firebase';
import styles from './FollowUpPage.module.css'
import FollowCard from './Card/FollowCard'
import { useParams } from 'react-router-dom';

const FollowUpPage = () => {
  const {id} =  useParams();
  const [leads, setLeads] = useState({});
  const[followUpArr, setFollowUpArr] = useState([])
  const [followUp, setFollowUp] = useState({
    summary: '',
    statement: '',
    status: '',
    transferto: '',
    nextdate: '',
    remarks: ''
  })

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("leads")
        .get()
        .then((querySnapshot) => {
          const arr = querySnapshot.docs
          arr.forEach((doc) => {
            if(doc.id === id)
            setLeads(doc.data())
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    };

    const fetchFollowUp = async () => {
      db.collection('followUp').onSnapshot(snapshot => {
        setFollowUpArr(snapshot.docs.map((doc) => ({
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
            transferto: doc.data().transferto
          })));
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
    const currentDate = new Date().toLocaleDateString();
    const currentUser = 'nishu'; 
    const followUpNumber = generateFollowUpNo();

    const followUpData = {
      ...followUp,
      leadNo: leads.leadNumber,
      followUpNo: followUpNumber,
      createdDate: currentDate,
      followUpBy: currentUser,
    };

    try {
        await db.collection('followUp').add(followUpData);
        setFollowUp({
          summary: '',
          statement: '',
          status: '',
          transferto: '',
          nextdate: '',
          remarks: ''
        });
      } catch (error) {
          console.error('Error adding course: ', error);
      }
  };

  const generateFollowUpNo = () => {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>Lead Info #{leads.leadNumber}</div>
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
          <div>
            
          </div>
          <div>
            <div>Address: </div>
            <div>{leads.city}, {leads.state}, {leads.locality}, {leads.pin}</div>
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
        <div style={{width: '100%', display: 'flex'}}><button className={styles.followCardbtn}>Load More</button></div>
      </div>
      <div className={styles.followHistoryContainer}>
        <div className={styles.followHisHeading}>Create New Follow-up</div>
        <div style={{gap:'2rem'}} className={styles.followCardContainer}>
            <textarea name='summary' onChange={handleChange} value={followUp.summary} rows={4} placeholder='Write Follow-up Summary'/>
            <input name='statement' onChange={handleChange} value={followUp.statement} placeholder='Enter the Follow-up Statement'/>
            <input name='nextdate' onChange={handleChange} value={followUp.nextdate} type='date' placeholder='Enter date'/>
            <input name='status' onChange={handleChange} value={followUp.status} type='text' placeholder='Status'/>
            <input name='remarks' onChange={handleChange} value={followUp.remarks} type='text' placeholder='Remarks'/>
            <input name='transferto' onChange={handleChange} value={followUp.transferto} type='text' placeholder='Transfer to'/>
            <div style={{width: '100%', display: 'flex', marginTop: '3rem'}}><button onClick={handleSubmit} className={styles.followCardbtn}>Submit</button></div>
        </div>
      </div>
    </div>
  )
}

export default FollowUpPage
