import axios from 'axios';
import authHeader from './auth-header';
import http from "@/http-common";

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

  get(id) {
    return http.get(`/users/${id}`);
  }
}

export default new UserService();