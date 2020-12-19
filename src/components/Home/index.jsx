import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard';
import NavBar from '../NavBar';
import './style.scss';
import axios from 'axios';

const carTypes = ['All', 'SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];

const Home = () => {
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    axios.get('https://serene-bayou-97137.herokuapp.com/logged_in', { withCredentials: true })
      .then(res => {
        setUserStatus(res.data.logged_in);
        console.log(res.data)
      }).catch(err => {
        console.error(err);
      })
  }, []); 

  return (
    <div className="home">
      <NavBar userStatus={userStatus} />
      <div className="content">
        <div className="filters">
          <select name="car-types" id="car-types">
            {
              carTypes.map(type => (
                <option value={type} key={type}>{type}</option>
              ))
            }
          </select>
        </div>
        <div className="cars">
          <CarCard userStatus={userStatus} />
          <CarCard userStatus={userStatus} />
        </div>
      </div>
    </div>
  );
}

export default Home;
