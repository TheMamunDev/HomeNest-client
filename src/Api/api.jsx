import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchFeaturedListing = async () => {
  try {
    const res = await api.get('/featured-listing');
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyListing = async email => {
  try {
    const result = await api.get(`/my-listing?email=${email}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchListingDetails = async id => {
  try {
    const result = await api.get(`/listing/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRatings = async id => {
  try {
    const result = await api.get(`/ratings/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyRatings = async email => {
  try {
    const result = await api.get(`/my-ratings?email=${email}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  const { data } = await api.get('/categories');
  return data;
};

export const getPriceRange = async () => {
  const { data } = await api.get('/price-range');
  return data;
};

export const getFilteredListings = async filters => {
  const params = new URLSearchParams();
  params.append('_start', filters._start);
  params.append('_limit', 9);
  if (filters.category && filters.category !== 'All')
    params.append('category', filters.category);
  if (filters.minPrice) params.append('minPrice', filters.minPrice);
  if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
  if (filters.propertyName) params.append('propertyName', filters.propertyName);
  if (filters.sort) params.append('sort', filters.sort);

  console.log(params.toString());
  const { data } = await api.get(`/listings?${params.toString()}`);
  return data;
};

export const insertListing = async data => {
  try {
    const res = await api.post('/listing', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const insertRating = async data => {
  try {
    const res = await api.post('/ratings', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateListing = async (id, data) => {
  try {
    const result = await api.patch(`/my-listing/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteListing = async id => {
  try {
    const result = await api.delete(`/my-listing/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};
