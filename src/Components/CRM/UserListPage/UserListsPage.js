import React, { useState, useEffect } from 'react';
import styles from './UserListsPage.module.css';
import { Link } from 'react-router-dom';
import db from '../../../firebase'; 

const UserListsPage = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = await db.collection('users').get();
        const fetchedUsers = usersRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  

  const handleDeleteUser = async (userId) => {
    try {
      await db.collection('users').doc(userId).delete();
      setUsers(users.filter(user => user.id !== userId));
      console.log('User deleted successfully:', userId);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className={styles.createUserLists__container}>
      <div className={styles.lead_Listspage_heading}>
        <Link to='/'>
          <div className={styles.lead_Listspagehome_ic}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
            >
              <path d="M12 2L1 11h3v9h6v-6h4v6h6v-9h3L12 2zm2 16h-4v-6H8v6H4v-8.811L12 4.415l8 8.774V18h-4v-6h-4v6z" />
            </svg>
          </div>
        </Link>
        <div className={styles.lead_Listspagehomeheading_}>
          User History
        </div>
      </div>
      <div className={styles.userLists_tab_heading}>User Lists</div>
      <div className={styles.userLists__tab}>
        <table>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Approval Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default UserListsPage;