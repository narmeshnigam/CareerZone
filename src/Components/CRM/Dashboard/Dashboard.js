import React from 'react'
import styles from './Dashboard.module.css'
import Linechart from './Chart/LineChart/Linechart';
import Barchart from './Chart/BarChart//Barchart';
import NoFollowUpRecords from './Tables/NoFollowUpRecords/NoFollowUpRecords';
import TodayFollowUp from './Tables/TodayFollowUp/TodayFollowUp';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Dashboard</div>
      <div className={styles.upperContainer}>
        <div className={styles.lineChart}><Linechart/></div>
        <div className={styles.rightContainer}>
            <div className={styles.rightContainerUpper}>
                <div className={styles.leadStats}>
                    <div style={{fontSize:'1.7rem', fontWeight:'500'}}>Today Leads</div>
                    <div>800</div>
                </div>
                <div className={styles.leadStats}>
                    <div style={{fontSize:'1.7rem', fontWeight:'500'}}>This Month</div>
                    <div>1200</div>
                </div>
            </div>
            <div className={styles.rightContainerLower}>
                <div className={styles.leadButtons}>Create New Lead</div>
                <div className={styles.leadButtons}>Lead History</div>
            </div>
        </div>
      </div>
      <div className={styles.upperContainer}>
        <div className={`${styles.rightContainerUpper} ${styles.barcahrtLeft}`}>
            <div className={styles["rightContainerUpper"]}>
                <div style={{background:'#86B65B'}} className={styles.leadStats}>
                    <div style={{fontSize:'1.7rem', fontWeight:'500'}}>Today FollowUp</div>
                    <div>800</div>
                </div>
                <div style={{background:'#86B65B'}} className={styles.leadStats}>
                    <div style={{fontSize:'1.7rem', fontWeight:'500'}}>This Month</div>
                    <div>1200</div>
                </div>
            </div>
            {/* <div className={styles.rightContainerLower}>
                <div className={styles.leadButtons}>Create New Lead</div>
                <div className={styles.leadButtons}>Lead History</div>
            </div> */}
        </div>
        <div style={{backgroundColor:'#ffff'}} className={styles.lineChart}><Barchart/></div>
      </div>
      <div>
        <NoFollowUpRecords/>
      </div>
      <div>
        <TodayFollowUp/>
      </div>
    </div>
  )
}

export default Dashboard
