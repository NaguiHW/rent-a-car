import React from 'react';
import CarCard from '../CarCard';
import NavBar from '../NavBar';
import './style.scss';

const carTypes = ['All', 'SUV', 'Truck', 'Sedan', 'Van', 'Luxury Car', 'Sports Car'];

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <div className="filters">
          <select name="car-types" id="car-types">
            {
              carTypes.map(type => (
                <option value={type} key={type}>{type}</option>
              ))
            }
          </select>
        </div>
        <div className="cars">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
