'use client';
// react
import { FC, useState } from 'react';
//next
import { useRouter } from 'next/navigation';
//action creators
import { postAsyncActionCreators } from '../../model/actionCreators/postAsyncActionCreators';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';

interface PostFormProps {}

export const PostForm: FC<PostFormProps> = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState('');

  const onCreatePostClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      postAsyncActionCreators.addPost({
        title: title,
        content: content,
        image: image
      })
    );

    setTitle('');
    setContent('');
    setImage('');

    router.push('/');
  };

  return (
    <form
      className='w-4xl mx-auto p-6 border rounded space-y-4'
      onSubmit={onCreatePostClick}
    >
      <div>
        <label htmlFor='title' className='block text-sm font-medium'>
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Enter post title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='comment' className='block text-sm font-medium'>
          Comment
        </label>
        <textarea
          id='comment'
          name='comment'
          rows={4}
          className='mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Write your comment'
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='image' className='block text-sm font-medium'>
          Image
        </label>
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          className='mt-1 block w-full border rounded px-3 py-2'
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];

            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
      >
        Create Post
      </button>
    </form>
  );
};
