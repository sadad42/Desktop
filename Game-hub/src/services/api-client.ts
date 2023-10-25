import axios from "axios";


export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c1c99b51ea46486c871a00b929d811d0'
  }
})