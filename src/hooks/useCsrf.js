import axios from 'axios'
import { apiUrl } from '../constants/url';

export const useCsrf = () => {

  axios.get(`${apiUrl}/sanctum/csrf-cookie`).then(response => {
    console.log(response)
  });

}