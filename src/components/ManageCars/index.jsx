import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { storage } from '../../firebase';
import './style.scss';

const carTypes = ['SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];
const transmission = ['Auto', 'Manual'];

const ManageCars = () => {
  const [formData, setFormData] = useState({
    model: '',
    carType: carTypes[0],
    price: '',
    year: '',
    horsePower: '',
    seats: '',
    doors: '',
    transmission: transmission[0],
    quantity: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
  });

  const [showCars, setShowCars] = useState([]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(formData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { image1, image2, image3, image4, image5 } = formData;
    if (image1.length > 0) {
      try {
        const { model, carType, price, year, horsePower, seats, doors, transmission, quantity } = formData;
        const car = {
          model,
          carType,
          price,
          year,
          horsePower,
          seats,
          doors,
          transmission,
          quantity,
          image1,
          image2,
          image3,
          image4,
          image5,
        }
        const res = await axios.post('https://db-car.herokuapp.com/cars', car, { withCredentials: true })
          .then(res => {
            setFormData({
              model: '',
              carType: carTypes[0],
              price: '',
              year: '',
              horsePower: '',
              seats: '',
              doors: '',
              transmission: transmission[0],
              quantity: '',
              image1: '',
              image2: '',
              image3: '',
              image4: '',
              image5: '',
            })
            loadCars();
          }).catch(err => {
            console.error(err);
          })
      } catch (err) {

      }
    } else {
      alert('You have to select at least 1 image.')
    }
  };

  const loadCars = () => {
    axios.get('https://db-car.herokuapp.com/cars', { withCredentials: true })
      .then(res => {
        setShowCars(res.data.cars);
      }).catch(err => {
        console.error(err);
      })
  };

  const deleteCar = id => {
    axios.delete(`https://db-car.herokuapp.com/cars/${id}`, { withCredentials: true })
      .then(res => {
        loadCars();
        console.log(res);
      }).catch(err => {
        console.error(err);
      })
  };

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <div className="manage-cars">
      <div className="new-car">
        <h3>Add new car</h3>
        <form className="new-car" onSubmit={handleSubmit}>
          <div className="form-info">
            <label htmlFor="model">
              Model:
              <br />
              <input type="text" name="model" id="model" onChange={handleChange} required autoComplete="off" value={formData.model} />
            </label>
            <label htmlFor="car-types">
              Car Type:
              <br />
              <select name="carType" id="car-types" onChange={handleChange} value={formData.carType} >
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
              <input type="number" name="price" id="price" onChange={handleChange} required autoComplete="off" min="0" step="0.01" value={formData.price}  />
            </label>
            <label htmlFor="year">
              Year:
              <br />
              <input type="number" name="year" id="year" onChange={handleChange} required autoComplete="off" min="2000" max="2021" step="1" value={formData.year}  />
            </label>
            <label htmlFor="horsePower">
              Horse Power:
              <br />
              <input type="number" name="horsePower" id="horsePower" onChange={handleChange} required autoComplete="off" min="100" max="320" step="1" value={formData.horsePower}  />
            </label>
            <label htmlFor="seats">
              Seats:
              <br />
              <input type="number" name="seats" id="seats" onChange={handleChange} required autoComplete="off" min="2" max="12" step="1" value={formData.seats}  />
            </label>
            <label htmlFor="doors">
              Doors:
              <br />
              <input type="number" name="doors" id="doors" onChange={handleChange} required autoComplete="off" min="2" max="6" step="1" value={formData.doors}  />
            </label>
            <label htmlFor="transmission">
              Transmission:
              <br />
              <select name="transmission" id="transmission" onChange={handleChange} value={formData.transmission} >
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
              <input type="number" name="quantity" id="quantity" onChange={handleChange} required autoComplete="off" min="1" step="1" value={formData.quantity}  />
            </label>
          </div>
          <p>You can put up to 5 images links.</p>
          <div className="uploaded-images">
            <input type="text" name="image1" onChange={handleChange} value={formData.image1} required autoComplete="off" />
            <input type="text" name="image2" onChange={handleChange} value={formData.image2} autoComplete="off" />
            <input type="text" name="image3" onChange={handleChange} value={formData.image3} autoComplete="off" />
            <input type="text" name="image4" onChange={handleChange} value={formData.image4} autoComplete="off" />
            <input type="text" name="image5" onChange={handleChange} value={formData.image5} autoComplete="off" />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
      <div className="all-cars">
        {
          showCars.map(car => (
            <div className="car-container" key={car.id}>
              <div className="left">
                <h1>{car.model}</h1>
                <div className="img-container">
                  <img src={car.image1} alt={car.model} />
                </div>
              </div>
              <div className="center">
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
                <div className="item">
                  <h3>Quantity: {car.quantity}</h3>
                </div>
              </div>
              <div className="right">
                <button type="button" onClick={() => deleteCar(car.id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ManageCars;
