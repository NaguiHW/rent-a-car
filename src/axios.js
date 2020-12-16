import axios from 'axios';

const instance = axios.create({
  // Local
  baseURL: 'http://127.0.0.1:5001/rent-a-car-b5d57/us-central1/api',
  // Production
  // baseURL:
});

export default instance;
