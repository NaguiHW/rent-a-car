import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import axios from 'axios';

const ManageCars = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [admin, setAdmin] = useState(false);

  const updateUserStatus = () => {
    setUserStatus(false);
  };

  useEffect(() => {
    axios.get('https://serene-bayou-97137.herokuapp.com/logged_in', { withCredentials: true })
      .then(res => {
        setUserStatus(res.data.logged_in);
        setAdmin(res.data.user.admin);
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="manage-cars">
      <NavBar userStatus={userStatus} admin={admin} updateUserStatus={updateUserStatus} />
      <div className="content">

      </div>
    </div>
  );
};

export default ManageCars;
