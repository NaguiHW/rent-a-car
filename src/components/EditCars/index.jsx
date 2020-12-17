import React, { useState } from 'react';
import NavBar from '../NavBar';
import axios from '../../axios'
import './style.scss';

const carTypes = ['SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];
const transmission = ['Auto', 'Manual'];

const EditCars = () => {
  const [formValues, setFormValues] = useState({
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
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const addCar = async e => {
    e.preventDefault();
    const { images } = formValues;
    if (images.length < 1) {
      alert('You have to have at least 1 image');
    } else {
      console.log(images[0].formData);
      axios.post('/uploadImages', images[0].formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res)
      })
      // const imagesResponse = await axios({
      //   method: 'post',
      //   url: '/uploadImages',
      //   file: images[0].formData,
      // })
    
      // console.log(imagesResponse.data);

      // const response = await axios({
      //   method: 'post',
      //   url: '/create-car',
      //   data: formValues,
      // });
      // console.log(response.data);
    }
  }

  const deleteImage = e => {
    setFormValues({
      ...formValues,
      images: formValues.images.filter(image => image.local !== e.target.value),
    });
  };

  const addImageToState = e => {
    const selectedImage = e.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);

    setFormValues({
      ...formValues,
      images: [...formValues.images, {
        local: window.URL.createObjectURL(selectedImage),
        formData,
      }],
    });

    // const formValues = new formValues();
    // formValues.append('image', selectedImage);

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
            formValues.images.map(image => (
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
          <input type="file" id="image" name="image" onChange={addImageToState} disabled={formValues.images.length === 5 && true} accept=".jpg, .jpeg, .png" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
  )
};

export default EditCars;
