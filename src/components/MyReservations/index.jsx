import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');

  const loadReservations = () => {
    axios.get('/reservations', { withCredentials: true })
      .then(res => {
        if (res.data.length === 0) setMessage(res.data.message);
        if (res.data.length > 0) {
          setReservations(res.data.reservations);
        }
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      });
  }

  const cancelReservation = id => {
    axios.delete(`/reservations/${id}`, { withCredentials: true })
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
        message.length > 0
        ? <h3>{message}</h3>
        : (
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
        )
      }
    </div>
  );
};

export default MyReservations;
