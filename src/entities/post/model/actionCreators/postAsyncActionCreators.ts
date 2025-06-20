//types
import { PostActionTypes } from '../actionTypes.ts/postActionTypes';
import {
  AddPostAction,
  DeletePostAction,
  GetPostAction,
  GetPostsAction,
  UpdatePostAction
} from '../types/postActions';

const getPosts = (): GetPostsAction => {
  return {
    type: PostActionTypes.GET_POSTS
  };
};

const getPost = (payload: GetPostAction['payload']): GetPostAction => {
  return {
    type: PostActionTypes.GET_POST,
    payload: payload
  };
};

const addPost = (payload: AddPostAction['payload']): AddPostAction => {
  return {
    type: PostActionTypes.ADD_POST,
    payload: payload
  };
};

const updatePost = (payload: UpdatePostAction['payload']): UpdatePostAction => {
  return {
    type: PostActionTypes.UPDATE_POST,
    payload: payload
  };
};

const deletePost = (payload: DeletePostAction['payload']): DeletePostAction => {
  return {
    type: PostActionTypes.DELETE_POST,
    payload: payload
  };
};

export const postAsyncActionCreators = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost
};
