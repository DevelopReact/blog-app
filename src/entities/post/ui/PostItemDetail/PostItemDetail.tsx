'use client';
// react
import { FC, useState } from 'react';

//types
import { IPost } from '../../model/types/postTypes';
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
import { useRouter } from 'next/navigation';
import { postAsyncActionCreators } from '../../model/actionCreators/postAsyncActionCreators';

interface PostItemDetailProps extends IPost {}

export const PostItemDetail: FC<PostItemDetailProps> = ({
  id,
  title,
  content,
  image
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [titleUpdate, setTitleUpdate] = useState<string>(title);
  const [contentUpdate, setContentUpdate] = useState<string>(content);
  const [imageUpdate, setImageUpdate] = useState(image);

  const onUpdatePostClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      postAsyncActionCreators.updatePost({
        id,
        updateFields: {
          title: titleUpdate,
          content: contentUpdate,
          image: imageUpdate
        }
      })
    );

    setTitleUpdate('');
    setContentUpdate('');
    setImageUpdate('');

    router.push('/');
  };

  const deleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(postAsyncActionCreators.deletePost(id));
    router.push('/');
  };

  return (
    <form
      className='w-4xl mx-auto p-6 border rounded space-y-4'
      onSubmit={onUpdatePostClick}
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
          onChange={(e) => setTitleUpdate(e.target.value)}
          value={titleUpdate}
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
          onChange={(e) => setContentUpdate(e.target.value)}
          value={contentUpdate}
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
                setImageUpdate(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <button
        type='submit'
        className='w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition'
      >
        Update Post
      </button>
      <button
        className='w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'
        onClick={deleteTodo}
      >
        Delete Post
      </button>
    </form>
  );
};
