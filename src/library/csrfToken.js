import axios from "axios";
import { beUrl } from "../constants/url";

const csrfToken = () => {

  return axios.get(`${beUrl}/sanctum/csrf-cookie`)

}

export default csrfToken