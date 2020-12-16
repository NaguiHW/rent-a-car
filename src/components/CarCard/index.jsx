import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const CarCard = () => (
  <div className="car-card">
    <h1 className="title">Car Name</h1>
    <div className="image-container">
      <img src="https://s3.caradvice.com.au/wp-content/uploads/2016/11/great-wall_wey_w01_06.jpg" alt="SUV" />
    </div>
    <div className="info">
      <h3 className="item">$ 50.00</h3>
      <h3 className="item">2018</h3>
    </div>
    <div className="options">
      <Link to="/">More Info</Link>
      <Link to="/">Make a Reservation</Link>
    </div>
  </div>
);

export default CarCard;
