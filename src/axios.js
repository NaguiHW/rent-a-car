import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://serene-bayou-97137.herokuapp.com',
});

export default instance;