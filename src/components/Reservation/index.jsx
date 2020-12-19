import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Reservation = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})
  const [reservation, setReservation] = useState({
    user_id: 0,
    car_id: id,
    startDate: '',
    endDate: '',
    total: 0,
  })

  const handleChange = e => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://db-car.herokuapp.com/reservations', { reservation }, { withCredentials: true })
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      });
    console.log(reservation);
  }

  useEffect(() => {
    axios.get(`https://db-car.herokuapp.com/cars/${id}`, { withCredentials: true })
      .then(res => {
        setCar(res.data.car[0]);
      }).catch(err => {
        console.error(err);
      });
    axios.get('https://db-car.herokuapp.com/logged_in', { withCredentials: true })
      .then(res => {
        if (res.data.user) {
          setReservation({
            ...reservation,
            user_id: res.data.user.id,
          });
        }
      }).catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const {startDate, endDate} = reservation;
    if (startDate !== '' && endDate !== '') {
      const endD = new Date(endDate);
      const startD = new Date(startDate);
      const ms = Math.abs(endD - startD);
      const diff = new moment.duration(ms);
      const total = car.price * diff.asDays();
      setReservation({
        ...reservation,
        total,
      })
    }
  }, [reservation.startDate, reservation.endDate])

  return (
    <div className="reservation">
      <h2>Make a reservation</h2>
      <div className="img-container">
        <img src={car.image1} alt={car.model}/>
      </div>
      <h3>{car.model}</h3>
      <h3>Price per day: ${car.price}.00</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">
          Start date:<br />
          <input type="date" name="startDate" id="startDate" onChange={handleChange} required />
        </label>
        <label htmlFor="endDate">
          End date:<br />
          <input type="date" name="endDate" id="endDate" onChange={handleChange} required />
        </label>
        <h3>Total to pay: ${reservation.total}.00</h3>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  )
};

export default Reservation;
