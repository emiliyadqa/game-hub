import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e51fe36bd77b45bbbbb7f900a1b45108",
  },
});