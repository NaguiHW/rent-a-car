import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const Car = () => {
  const [car, setCar] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://db-car.herokuapp.com/cars/${id}`, { withCredentials: true })
      .then(res => {
        setCar(res.data.car[0]);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="car">
      <div className="car-container" key={car.id}>
        <div className="left">
          <h1>{car.model}</h1>
          <div className="img-container">
            <img src={car.image1} alt={car.model} />
          </div>
        </div>
        <div className="right">
          <div className="item">
            <h3>Type: {car.carType}</h3>
          </div>
          <div className="item">
            <h3>Price per day: ${car.price}.00</h3>
          </div>
          <div className="item">
            <h3>Year: {car.year}</h3>
          </div>
          <div className="item">
            <h3>Horse Power: {car.horsePower}</h3>
          </div>
          <div className="item">
            <h3>Seats: {car.seats}</h3>
          </div>
          <div className="item">
            <h3>Doors: {car.doors}</h3>
          </div>
          <div className="item">
            <h3>Transmission: {car.transmission}</h3>
          </div>
        </div>
      </div>
      <Link to="/">Make a reservation</Link>
    </div>
  );
};

export default Car;
