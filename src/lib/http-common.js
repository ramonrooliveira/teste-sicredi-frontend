import axios from "axios";

export default axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
  headers: {
    "Content-type": "application/json"
  }
});