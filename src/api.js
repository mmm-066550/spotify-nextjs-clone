import axios from "axios";
const token = window?.localStorage?.getItem("token");

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
