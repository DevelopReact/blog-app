// react
import { FC } from 'react';

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <span className='text-white text-2xl font-semibold animate-pulse'>
        Loading...
      </span>
    </div>
  );
};
