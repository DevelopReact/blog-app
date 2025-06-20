'use client';
//react
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
//store
import { createReduxStore } from '../store/createStore';

interface Props {
  children: ReactNode;
}

const store = createReduxStore();

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
