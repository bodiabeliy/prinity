import axios from 'axios';

export default axios.create({
  baseURL: "https://api-prinity.onrender.com",
  responseType: 'json',
});