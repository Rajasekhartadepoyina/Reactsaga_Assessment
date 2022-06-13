/**
 * This method will perform excess task by adding excess headers
 * globally for authentication.
 * @param {Object} reqConfig - Request config object
 */
const RequestInterceptor = (reqConfig) => {
  try {
    const token = localStorage.getItem("token");
    reqConfig.headers = {
      ...reqConfig.headers,
      "x-auth-token": token,
    };
    return reqConfig;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default RequestInterceptor;
