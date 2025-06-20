//next
import { Metadata } from 'next';
//ui
import { Posts } from '@/widgets/posts';

export const metadata: Metadata = {
  title: 'posts',
  description: 'posts list'
};

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Posts />
    </div>
  );
}
