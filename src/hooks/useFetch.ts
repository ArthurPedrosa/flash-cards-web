import useSWR from 'swr';
import api from '../services/api';

interface IResponse {
  data: any;
  error: any;
}

export function useFetch<Data = any, Error = any>(url: string): IResponse {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}
