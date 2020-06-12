import axios from 'axios';
import {baseURL} from './util';

const publicFetch = axios.create({
  // baseURL: process.env.REACT_APP_API_URL
  baseURL
})

export { publicFetch }