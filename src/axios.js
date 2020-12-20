import axios from 'axios';

const instance = axios.create({
  // Production URL
  baseURL: 'https://db-car.herokuapp.com',
  // Dev URL
  // baseURL: 'http://localhost:8000',
});

export default instance;