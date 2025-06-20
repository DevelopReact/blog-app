//next
import { Metadata } from 'next';
//ui
import { PostForm } from '@/entities/post';

export const metadata: Metadata = {
  title: 'create post',
  description: 'create post form'
};

export default function CreatePost() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <PostForm />
    </div>
  );
}
