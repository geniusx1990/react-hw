import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMenuItems } from '../features/menuSlice';
import { AppDispatch } from '../store';

const useFetch = (url: string) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch, url]);

  return null;
};

export default useFetch;
