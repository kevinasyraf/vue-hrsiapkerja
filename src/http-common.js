import axios from "axios";

export default axios.create({
  baseURL: "https://polar-mountain-10123.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE"
  }
});

