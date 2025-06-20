//state
export { postReducer } from './model/reducer/postReducer';
export { getPostState } from './model/selectors/postSelectors';
//watchers
export { postWatchers } from './model/watchers/postWatchers';
//actions
export { postAsyncActionCreators } from './model/actionCreators/postAsyncActionCreators';
//services
export { postServices } from './model/services/postServices';
//ui
export { PostItemList } from './ui/PostItemList/PostItemList';
export { PostForm } from './ui/PostForm/PostForm';
export { PostItem } from './ui/PostItem/PostItem';
export { PostItemDetail } from './ui/PostItemDetail/PostItemDetail';
//types
export type { PostsStateSchema } from './model/types/postTypes';
export type { IPost } from './model/types/postTypes';
