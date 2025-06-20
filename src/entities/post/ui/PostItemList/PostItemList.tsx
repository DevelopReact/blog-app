'use client';

// react
import { FC } from 'react';
//ui
import { PostItem } from '../PostItem/PostItem';
//types
import { IPost } from '../../model/types/postTypes';

interface PostItemListProps {
  posts: IPost[];
}

export const PostItemList: FC<PostItemListProps> = ({ posts }) => {
  return (
    <div className='flex flex-col gap-6 mt-24'>
      {posts
        ?.slice()
        .reverse()
        .map(({ id, title, content, image }) => {
          return (
            <PostItem
              id={id}
              key={id}
              title={title}
              content={content}
              image={image}
            />
          );
        })}
    </div>
  );
};
