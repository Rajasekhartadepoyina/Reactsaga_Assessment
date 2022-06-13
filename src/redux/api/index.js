import axios from "axios";
import RequestInterceptor from "./request_interceptor";
import ResponseInterceptor from "./response_interceptor";

// This will configure the singleton axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
API.interceptors.request.use(RequestInterceptor);
API.interceptors.response.use(null, ResponseInterceptor);

export default API;
