import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const CarCard = ({ userStatus, car }) => (
  <div className="car-card">
    <h1 className="title">{car.model}</h1>
    <div className="image-container">
      <img src={car.image1} alt="SUV" />
    </div>
    <div className="info">
      <h3 className="item">$ {car.price}.00</h3>
      <h3 className="item">{car.year}</h3>
    </div>
    <div className="options">
      <Link to={`/car/${car.id}`}>More Info</Link>
      {
        userStatus && (
          <Link to="/">Make a Reservation</Link>
        )
      }
    </div>
  </div>
);

CarCard.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default CarCard;
