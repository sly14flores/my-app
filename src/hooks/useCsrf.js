import axios from 'axios'
import { beUrl } from '@constants/url'

export const useCsrf = () => {

  axios.get(`${beUrl}/sanctum/csrf-cookie`).then(response => {
    console.log(response)
  });

}