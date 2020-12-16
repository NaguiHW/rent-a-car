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
    images: [],
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

  const deleteImage = e => {
    setFormData({
      ...formData,
      images: formData.images.filter(image => image.local !== e.target.value),
    });
  };

  const addImageToState = e => {
    const selectedImage = e.target.files[0];
    const formdata = new FormData();
    formdata.append('image', selectedImage);

    setFormData({
      ...formData,
      images: [...formData.images, {
        local: window.URL.createObjectURL(selectedImage),
        formdata,
      }],
    });
  };
 
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
        <p>You can upload up to 5 images</p>
        <div className="uploaded-images">
          {
            formData.images.map(image => (
              <>
                <div className="image-container">
                  <img src={image.local} alt="uploaded" className="image" />
                </div>
                <button type="button" className="icon-container" onClick={deleteImage} value={image.local}>X</button>
              </>
            ))
          }
        </div>
        <label htmlFor="image">
          <span>Upload Images: </span>
          <input type="file" id="image" name="image" onChange={addImageToState} disabled={formData.images.length === 5 && true} accept=".jpg, .jpeg, .png" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
  )
};

export default EditCars;
