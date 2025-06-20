//types
import { StateSchema } from '../types/postTypes';

export const getPostState = (state: StateSchema) => state.post;

export const getPostId = (state: StateSchema) => state.post.posts;
