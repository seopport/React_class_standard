import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 3000,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    console.log('요청합니다.', config);
    return config;
  },

  function (error) {
    console.log('인터셉터 요청 실패');
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (res) {
    console.log('응답입니다.', res);
    return res;
  },

  function (error) {
    console.log('인터센터 응답 수신 실패');
    return Promise.reject(error);
  }
);

export default api;
