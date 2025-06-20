//actions type
import { IPost, PostsStateSchema } from './postTypes';
//types
import { PostActionTypes } from '../actionTypes.ts/postActionTypes';

export type SetPostsLoadingAction = {
  type: PostActionTypes.SET_POST_LOADING;
  payload: PostsStateSchema['isLoading'];
};

export type SetPostErrorAction = {
  type: PostActionTypes.SET_POST_ERROR;
  payload: PostsStateSchema['error'];
};

export type SetPostsAction = {
  type: PostActionTypes.SET_POSTS;
  payload: PostsStateSchema['posts'];
};

export type GetPostsAction = {
  type: PostActionTypes.GET_POSTS;
};

export type GetPostAction = {
  type: PostActionTypes.GET_POST;
  payload: IPost['id'];
};

export type AddPostAction = {
  type: PostActionTypes.ADD_POST;
  payload: Pick<IPost, 'title' | 'content' | 'image'>;
};

export type UpdatePostAction = {
  type: PostActionTypes.UPDATE_POST;
  payload: {
    id: IPost['id'];
    updateFields: Pick<IPost, 'title' | 'content' | 'image'>;
  };
};

export type DeletePostAction = {
  type: PostActionTypes.DELETE_POST;
  payload: IPost['id'];
};

type PostSyncActions =
  | SetPostsAction
  | SetPostsLoadingAction
  | SetPostErrorAction;

type PostAsyncActions =
  | GetPostsAction
  | GetPostAction
  | AddPostAction
  | UpdatePostAction
  | DeletePostAction;

export type PostActions = PostSyncActions | PostAsyncActions;
