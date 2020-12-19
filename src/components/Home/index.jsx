import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

const carTypes = ['All', 'SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];

const Home = ({ userStatus }) => {
  const [showCars, setShowCars] = useState([]);

  const loadCars = () => {
    axios.get('https://db-car.herokuapp.com/cars', { withCredentials: true })
      .then(res => {
        setShowCars(res.data.cars);
      }).catch(err => {
        console.error(err);
      })
  };

  useEffect(() => {
    loadCars();
  }, []);

  return (
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
        {
          showCars.map(car => (
            <CarCard userStatus={userStatus} car={car} />
          ))
        }
      </div>
    </div>
  );
};

Home.propTypes = {
  userStatus: PropTypes.bool.isRequired,
}

export default Home;
