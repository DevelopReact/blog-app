//types
import { PostActionTypes } from '../actionTypes.ts/postActionTypes';
import {
  SetPostErrorAction,
  SetPostsAction,
  SetPostsLoadingAction
} from '../types/postActions';

const setPostsLoading = (
  payload: SetPostsLoadingAction['payload']
): SetPostsLoadingAction => {
  return {
    type: PostActionTypes.SET_POST_LOADING,
    payload: payload
  };
};

const setPostsError = (
  payload: SetPostErrorAction['payload']
): SetPostErrorAction => {
  return {
    type: PostActionTypes.SET_POST_ERROR,
    payload: payload
  };
};

const setPosts = (payload: SetPostsAction['payload']): SetPostsAction => {
  return {
    type: PostActionTypes.SET_POSTS,
    payload: payload
  };
};

export const postActionCreators = {
  setPosts,
  setPostsError,
  setPostsLoading
};
