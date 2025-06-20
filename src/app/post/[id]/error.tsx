'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex justify-center items-center min-h-screen text-red-500 text-xl font-semibold'>
      Error: {error.message}
    </div>
  );
}
