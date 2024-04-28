import React, { useState, useEffect } from 'react'
import db from '../../../firebase'
import FollowCard from '../FollowUpPage/Card/FollowCard'
import styles from './FollowUpHistory.module.css'

const FollowUpHistory = () => {

    const[followUpArr, setFollowUpArr] = useState([])

    useEffect(() => {
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

        
    fetchFollowUp();

    },[])

  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default FollowUpHistory
