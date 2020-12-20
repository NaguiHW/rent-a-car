import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  const loadReservations = () => {
    axios.get('https://db-car.herokuapp.com/reservations', { withCredentials: true })
      .then(res => {
        setReservations(res.data.reservations);
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      });
  }

  const cancelReservation = id => {
    axios.delete(`https://db-car.herokuapp.com/reservations/${id}`, { withCredentials: true })
      .then(res => {
        loadReservations();
      }).catch(err => {
        console.error(err);
      })
  }

  useEffect(() => {
    loadReservations();
  }, []);

  return (
    <div className="my-reservations">
      {
        reservations.map(res => (
          <div className="res" key={res.id}>
            <div className="left">
              <img src={res.image1} alt="res.model"/>
            </div>
            <div className="center">
              <h3>{res.model}</h3>
              <p>Start date: {res.startDate.split('T')[0]}</p>
              <p>End date: {res.startDate.split('T')[0]}</p>
              <p>Total: ${res.total}.00</p>
            </div>
            <div className="right">
              <button type="button" onClick={() => cancelReservation(res.id)}>Cancel Reservation</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default MyReservations;
