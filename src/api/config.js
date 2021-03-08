import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://fe-interview-api.unnotech.com',
});

// response
apiInstance.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject('error');
    }

    return response.data;
  },
  err => {
    console.log(err); // for debug
    return Promise.reject(err.response);
  }
);

export default apiInstance;
