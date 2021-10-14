import axios from 'axios'

export const HTTP = axios.create({
  baseURL : 'http://api.tshop.loc',
  withCredentials : true,
})