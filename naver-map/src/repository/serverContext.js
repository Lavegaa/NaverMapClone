import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_NAVER_SERVER_URL;

const api = (contentType = 'application/json') => {
  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
      'Access-Control-Allow-Headers':
        'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
    },
  });
};

export default api;
