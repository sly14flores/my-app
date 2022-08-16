import axios from 'axios'
import useStorage from './useStorage'

const useToken = () => {

  const { token } = useStorage().get()

  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.withCredentials = true;

  /**
   * Add Token
   */
  axios.interceptors.request.use(function (config) {
  
      config.headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${token}`,
      }
  
      return config;
  
  });
  
  /**
   * Validation sequence
   * 401 for invalid token e.g., expired or non-passport token
   */
  axios.interceptors.response.use(
  
      response => response,
      // eslint-disable-next-line func-names
      async function(error) {
          if (error?.response?.status === 401) {
              const url = error?.response?.config.url
              const sUrl = url.split('/')
              const route = sUrl[sUrl.length-1]
              if (route!=='login') window.open('/login','_self')
          }
          return Promise.reject(error);
      },
  
  );

}

export default useToken