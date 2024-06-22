import axios from 'axios';

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

export const fetchRecipes = async (query) => {
  const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=1a6a2f66&app_key=0b323457046d0a36e07ae5f49201971c`);
  return response.data.hits;
};
