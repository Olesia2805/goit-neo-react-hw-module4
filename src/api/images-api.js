import axios from 'axios';

const API_KEY = 'aBN4VfTQj-yIlvxO6MYdJWmm40FBd91h-w_JnDtaaF0';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchImages = async (inputValue, page = 1) => {
  const response = await axiosInstance.get('/search/photos', {
    params: {
      query: inputValue,
      page,
      per_page: 9,
      orientation: 'landscape',
    },
  });

  return response.data.results;
};
