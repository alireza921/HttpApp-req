import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,

  put: axios.put,
};

export default http;
