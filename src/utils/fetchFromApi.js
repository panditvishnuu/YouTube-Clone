import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '80'
  },
  headers: {
    'X-RapidAPI-Key': 'd7dc008ea5msh3a84473dabe41d2p1ae2c9jsn9d3ccc16480e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}