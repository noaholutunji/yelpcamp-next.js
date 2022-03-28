import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://noah-yelpcamp-api.herokuapp.com',
 
});

export default instance;