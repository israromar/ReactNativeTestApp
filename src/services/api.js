import axios from 'axios';
/**
 * AccessID
 * @type {AxiosInstance}
 */
// called endPoint api here
const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
