//redux
import { Reducer } from 'redux';
//types
import { PostActionTypes } from '../actionTypes.ts/postActionTypes';
import { PostsStateSchema } from '../types/postTypes';
import { PostActions } from '../types/postActions';

const initialState: PostsStateSchema = {
  error: '',
  isLoading: false,
  posts: []
};

export const postReducer: Reducer<PostsStateSchema, PostActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PostActionTypes.SET_POST_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case PostActionTypes.SET_POSTS: {
      return { ...state, posts: action.payload };
    }

    case PostActionTypes.SET_POST_ERROR: {
      return { ...state, error: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
