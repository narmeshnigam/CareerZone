import React, { useEffect, useState } from 'react'
import styles from './AdminContact.module.css'
import db from '../../../firebase'

const AdminContact = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          db.collection('quickApply').onSnapshot(snapshot => {
            setData(snapshot.docs.map((doc) => ({
              id: doc.id,
              name:doc.data().name,
              email: doc.data().email,
              phoneNo: doc.data().phone,
              enquire: doc.data().enquire,
              message: doc.data().message,
            })));
          });
        };
    
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await db.collection("quickApply").doc(id).delete();
      };
      
  return (
    <div className={styles.container}>
        <div>Contact Page Data</div>
        <table>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Message</th>
                <th>Delete Field</th>
            </tr>
            {data.map((data, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNo}</td>
              <td>{data.message}</td>
              <td>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      
    </div>
  )
}

export default AdminContact
