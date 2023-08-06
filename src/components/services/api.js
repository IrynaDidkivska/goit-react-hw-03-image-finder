import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const options = {
  key: '38169023-4cd5979d1be751dcc09962885',
  image_type: 'photo',
  orientation: 'horizontal',
  safeSearch: true,
  per_page: 30,
};

export const fetchImg = async params => {
  const { data } = await axios.get('', {
    params: { ...options, ...params },
  });
  return data;
};