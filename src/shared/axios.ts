import axios from "axios";
import * as http from "http";
import * as https from "https";

const axiosInstance = axios.create({
  //keepAlive pools and reuses TCP connections, so it's faster
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  //follow up to 10 HTTP 3xx redirects
  maxRedirects: 10,

  //cap the maximum content length we'll accept to 50MBs, just in case
  maxContentLength: 50 * 1000 * 1000
})

// wait ao most 3s for a response
axiosInstance.defaults.timeout = 3000;

export default axiosInstance;