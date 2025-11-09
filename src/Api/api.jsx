import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchFeaturedListing = async () => {
  const res = await api.get('/listing');
  return res.status === 200 ? res.data : [];
};

export const insertListing = async data => {
  try {
    const res = await api.post('/listing', data);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};
