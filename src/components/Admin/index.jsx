import React from 'react';
import NavBar from '../NavBar';
import './style.scss';

const carTypes = ['SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];
const transmission = ['Auto', 'Manual'];

const Admin = () => (
  <div className="admin">
    <NavBar />
    <div className="content">
      <h3>Add new car</h3>
      <form className="new-car">
        <div className="form-info">
          <label htmlFor="model">
            Model:
            <br />
            <input type="text" name="model" id="model" />
          </label>
          <label htmlFor="car-types">
            Car Type:
            <br />
            <select name="car-types" id="car-types">
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
            <input type="number" name="price" id="price" />
          </label>
          <label htmlFor="year">
            Year:
            <br />
            <input type="number" name="year" id="year" />
          </label>
          <label htmlFor="speed">
            Speed (Km/h):
            <br />
            <input type="number" name="speed" id="speed" />
          </label>
          <label htmlFor="seats">
            Seats:
            <br />
            <input type="number" name="seats" id="seats" />
          </label>
          <label htmlFor="doors">
            Doors:
            <br />
            <input type="number" name="doors" id="doors" />
          </label>
          <label htmlFor="transmission">
            Transmission:
            <br />
            <select name="transmission" id="transmission">
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
            <input type="number" name="quantity" id="quantity" />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
);

export default Admin;
