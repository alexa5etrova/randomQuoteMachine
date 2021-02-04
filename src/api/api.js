
import axios from "axios";



export const getNewQuoteApi = () => {
  return axios
    .get("https://api.quotable.io/random")
} 
	