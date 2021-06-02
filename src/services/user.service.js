import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getCEOBoard() {
    return axios.get(API_URL + 'ceo', { headers: authHeader() });
  }

  getStafHRBoard() {
    return axios.get(API_URL + 'stafhr', { headers: authHeader() });
  }

  getInternalEmployeeBoard() {
    return axios.get(API_URL + 'internalemployee', { headers: authHeader() });
  }
}

export default new UserService();