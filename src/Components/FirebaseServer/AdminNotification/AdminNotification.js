import React, { useState, useEffect } from 'react'
import db from "../../../firebase";
import styles from './AdminNotification.module.css'
import Loading from '../Loading/Loading';

const AdminNotification = () => {

  const [noti, setNoti] = useState('');
  const[loading, setLoading] = useState(false)
  const [displayNoti, setDisplayNoti] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection('notification').onSnapshot(snapshot => {
        let arr = (snapshot.docs.map((doc) => ({
          id: doc.id,
          date: doc.data().curdate,
          notification: doc.data().notification
        })));
        function compare(a, b) {
          if (a.date > b.date) {
            return -1;
          }
          if (a.date < b.date) {
            return 1;
          }
          return 0;
        }

        arr.sort(compare);
        setDisplayNoti([...arr])
      });
    };


    fetchImages();
  }, []);

  const handleSubmit = async () => {
    setLoading(true)
    const currdate = new Date();
    const year = currdate.getFullYear().toString();
    const month = (currdate.getMonth() + 1).toString();
    const cdate = currdate.getDate().toString();
    const hr = currdate.getHours().toString();
    const min = currdate.getMinutes().toString();
    const sec = currdate.getSeconds().toString();
    const date = ((year.length > 1 ? year : '0' + year) + '' + (month.length > 1 ? month : '0' + month) + '' + (cdate.length > 1 ? cdate : '0' + cdate) + '' + (hr.length > 1 ? hr : '0' + hr) + '' + (min.length > 1 ? min : '0' + min) + '' + (sec.length > 1 ? sec : '0' + sec));

    const id = randomString();
    await db.collection("notification").doc(id).set({
      notification: noti,
      curdate: date
    });
    setNoti("");
    setLoading(false)
  }

  function randomString() {
    var result = "";
    let length = 20;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  const handleDelete = async (id) => {
    setLoading(true)
    await db.collection("notification").doc(id).delete();
    setLoading(false)
  };

  return (
    <>
      <div style={{ position: 'absolute', backgroundColor: '#00000021' }}>{loading === true ? <Loading /> : ''}</div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.heading}>Enter the Notification to be displayed</div>
          <div className={styles.input}><textarea rows="10" cols="20" placeholder='Enter the notification..' onChange={(e) => setNoti(e.target.value)} value={noti}></textarea></div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
        <table style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Notification</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayNoti.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.notification}</td>
                <td>
                  <button onClick={() => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminNotification
