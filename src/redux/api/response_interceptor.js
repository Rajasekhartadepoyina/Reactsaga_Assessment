/**
 * This method will perform excess task if needed. Like, on authentication
 * failure it navigates to login page.
 * @param {Object} error - Denotes API error
 */
// TODO: Add navigation logic
const ResponseInterceptor = (error) => {
  return Promise.reject(error);
};

export default ResponseInterceptor;
