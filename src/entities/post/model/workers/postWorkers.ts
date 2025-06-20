//redux-saga
import { SagaIterator } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
//services
import { postServices } from '../services/postServices';
//actionCreators
import { postActionCreators } from '../actionCreators/postActionCreators';
import { postAsyncActionCreators } from '../actionCreators/postAsyncActionCreators';
//actions type
import {
  AddPostAction,
  DeletePostAction,
  GetPostAction,
  UpdatePostAction
} from '../types/postActions';

export function* getPostsWorker(): SagaIterator {
  yield put(postActionCreators.setPostsLoading(true));

  try {
    const response = yield call([postServices, postServices.getPosts]);
    const data = response;

    yield put(postActionCreators.setPosts(data));
  } catch (error: any) {
    yield put(postActionCreators.setPostsError(error.message));
  }

  yield put(postActionCreators.setPostsLoading(false));
}

export function* getPostWorker(action: GetPostAction): SagaIterator {
  yield put(postActionCreators.setPostsLoading(true));

  try {
    const response = yield call(
      [postServices, postServices.getPost],
      action.payload
    );
    const data = response;
    yield put(postActionCreators.setPosts([data]));
  } catch (error: any) {
    yield put(postActionCreators.setPostsError(error.message));
  }

  yield put(postActionCreators.setPostsLoading(false));
}

export function* createPostWorker(action: AddPostAction): SagaIterator {
  yield put(postActionCreators.setPostsLoading(true));

  try {
    yield call([postServices, postServices.createPost], action.payload);
    yield put(postAsyncActionCreators.getPosts());
  } catch (error: any) {
    yield put(postActionCreators.setPostsError(error.message));
  }

  yield put(postActionCreators.setPostsLoading(false));
}

export function* updatePostWorker(action: UpdatePostAction): SagaIterator {
  yield put(postActionCreators.setPostsLoading(true));

  try {
    yield call([postServices, postServices.updatePost], action.payload);

    yield put(postAsyncActionCreators.getPosts());

    yield take('GET_POSTS_SUCCESS'); //Generator blocking effect for run action in correct queue
  } catch (error: any) {
    yield put(postActionCreators.setPostsError(error.message));
  } finally {
    yield put(postActionCreators.setPostsLoading(false));
  }
}

export function* deletePostWorker(action: DeletePostAction): SagaIterator {
  yield put(postActionCreators.setPostsLoading(true));

  try {
    yield call([postServices, postServices.deletePost], action.payload);
    yield put(postAsyncActionCreators.getPosts());
  } catch (error: any) {
    yield put(postActionCreators.setPostsError(error.message));
  }

  yield put(postActionCreators.setPostsLoading(false));
}
