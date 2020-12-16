import React, { useState } from 'react';
import NavBar from '../NavBar';
import './style.scss';

const carTypes = ['SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];
const transmission = ['Auto', 'Manual'];

const EditCars = () => {
  const [formData, setFormData] = useState({
    model: '',
    carType: carTypes[0],
    price: '',
    year: '',
    speed: '',
    seats: '',
    doors: '',
    transmission: transmission[0],
    quantity: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const addCar = e => {
    e.preventDefault();
    console.log(formData);
  }
 
  return (
    <div className="edit-cars">
    <NavBar />
    <div className="content">
      <h3>Add new car</h3>
      <form className="new-car" onSubmit={addCar}>
        <div className="form-info">
          <label htmlFor="model">
            Model:
            <br />
            <input type="text" name="model" id="model" onChange={handleChange} required autoComplete="off" />
          </label>
          <label htmlFor="car-types">
            Car Type:
            <br />
            <select name="carType" id="car-types" onChange={handleChange}>
              {
                carTypes.map(type => (
                  <option value={type} key={type}>{type}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="price">
            Price per day:
            <br />
            <input type="number" name="price" id="price" onChange={handleChange} required autoComplete="off" min="0" step="0.01" />
          </label>
          <label htmlFor="year">
            Year:
            <br />
            <input type="number" name="year" id="year" onChange={handleChange} required autoComplete="off" min="2000" max="2021" step="1" />
          </label>
          <label htmlFor="speed">
            Speed (Km/h):
            <br />
            <input type="number" name="speed" id="speed" onChange={handleChange} required autoComplete="off" min="160" max="320" step="1" />
          </label>
          <label htmlFor="seats">
            Seats:
            <br />
            <input type="number" name="seats" id="seats" onChange={handleChange} required autoComplete="off" min="4" max="12" step="1" />
          </label>
          <label htmlFor="doors">
            Doors:
            <br />
            <input type="number" name="doors" id="doors" onChange={handleChange} required autoComplete="off" min="2" max="6" step="1" />
          </label>
          <label htmlFor="transmission">
            Transmission:
            <br />
            <select name="transmission" id="transmission" onChange={handleChange}>
              {
                transmission.map(type => (
                  <option value={type} key={type}>{type}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="quantity">
            Quantity:
            <br />
            <input type="number" name="quantity" id="quantity" onChange={handleChange} required autoComplete="off" min="1" step="1" />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
  )
};

export default EditCars;
