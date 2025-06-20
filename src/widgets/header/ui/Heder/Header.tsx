import Link from 'next/link';

export const Header = () => {
  return (
    <header className='fixed w-full bg-white shadow-md py-4 px-8 flex items-center justify-between '>
      <div className='text-2xl font-bold text-gray-800'>
        <Link href='/'>BlogApp</Link>
      </div>
      <nav className='flex space-x-6'>
        <Link
          href='/'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          Posts
        </Link>
        <span className='text-gray-300'>|</span>
        <Link
          href='/create'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          Create Post
        </Link>
      </nav>
    </header>
  );
};
