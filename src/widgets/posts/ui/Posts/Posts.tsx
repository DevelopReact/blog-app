'use client';

// react
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
//entities
import {
  getPostState,
  postAsyncActionCreators,
  PostItemList
} from '@/entities/post';
//hooks
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
//ui
import { Loader } from '@/shared/ui/Loader/Loader';
import { Error } from '@/shared/ui/Error/Error';

interface PostsProps {}

export const Posts: FC<PostsProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postAsyncActionCreators.getPosts());
  }, []);

  const { error, isLoading, posts } = useSelector(getPostState);
  console.log(posts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <PostItemList posts={posts} />;
};
