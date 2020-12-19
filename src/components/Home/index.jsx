import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard';
import PropTypes from 'prop-types';
import './style.scss';

const carTypes = ['All', 'SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];

const Home = ({ userStatus }) => (
  <div className="home">
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
);

Home.propTypes = {
  userStatus: PropTypes.bool.isRequired,
}

export default Home;
