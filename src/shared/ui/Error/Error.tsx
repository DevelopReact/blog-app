// react
import { FC } from 'react';

interface ErrorProps {
  error: string;
}

export const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div className='flex justify-center items-center min-h-screen text-red-500 text-xl font-semibold'>
      Error: {error}
    </div>
  );
};
