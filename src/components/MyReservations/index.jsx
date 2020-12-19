import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  const loadReservations = () => {
    axios.get('https://db-car.herokuapp.com/reservations', { withCredentials: true })
      .then(res => {
        setReservations(res.data.reservations);
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
          <div className="reservation" key={res.id}>
            <p>Start date: {res.startDate.split('T')[0]}</p>
            <p>End date: {res.startDate.split('T')[0]}</p>
            <p>Total: ${res.total}.00</p>
            <button type="button" onClick={() => cancelReservation(res.id)}>Cancel Reservation</button>
          </div>
        ))
      }
    </div>
  );
};

export default MyReservations;
