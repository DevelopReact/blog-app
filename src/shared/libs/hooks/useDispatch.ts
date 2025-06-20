//react-redux
import { useDispatch as useReduxDispatch } from 'react-redux';
//config
import { AppDispatch } from '@/app/config/store/createStore';

export const useDispatch = () => {
  return useReduxDispatch<AppDispatch>();
};
