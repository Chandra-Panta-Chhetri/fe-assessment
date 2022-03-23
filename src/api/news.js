import axios from "axios";
const BASE_URL = "https://newsapi.org/v2";

export const getNewsHeadlines = async (query = {}) => {
  query.apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: query
  });
  return response.data;
};
