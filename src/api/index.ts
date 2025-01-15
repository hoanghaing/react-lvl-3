import axios from 'axios';
import useSWR from 'swr';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Generic fetcher using Axios
const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

// Custom hook for fetching users
const useUsers = () => {
  const { data, error } = useSWR(`${BASE_URL}/users`, fetcher);

  return {
    users: data || [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export { useUsers };
