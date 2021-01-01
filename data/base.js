import axios from "axios";

export default axios.create({
  baseURL: "https://fast-citadel-61940.herokuapp.com",
  responseType: "json",
});
