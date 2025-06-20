'use client';
// react
import { FC } from 'react';
// next
import Link from 'next/link';
//types
import { IPost } from '../../model/types/postTypes';

interface PostItemProps extends IPost {}

export const PostItem: FC<PostItemProps> = ({ id, title, content, image }) => {
  return (
    <Link
      href={`/post/${id}`}
      className='flex flex-col items-center gap-4 p-4 border rounded-lg'
    >
      <div>
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <img src={image} alt='#' />
      </div>
    </Link>
  );
};
