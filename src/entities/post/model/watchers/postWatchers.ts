//redux
import { spawn, takeEvery } from 'redux-saga/effects';
//workers
import {
  createPostWorker,
  deletePostWorker,
  getPostsWorker,
  getPostWorker,
  updatePostWorker
} from '../workers/postWorkers';
//types
import { PostActionTypes } from '../actionTypes.ts/postActionTypes';

function* getPostsWatcher() {
  yield takeEvery(PostActionTypes.GET_POSTS, getPostsWorker);
}

function* getPostWatcher() {
  yield takeEvery(PostActionTypes.GET_POST, getPostWorker);
}

function* createPostWatcher() {
  yield takeEvery(PostActionTypes.ADD_POST, createPostWorker);
}

function* updatePostWatcher() {
  yield takeEvery(PostActionTypes.UPDATE_POST, updatePostWorker);
}

function* deletePostWatcher() {
  yield takeEvery(PostActionTypes.DELETE_POST, deletePostWorker);
}

const postWatchersArray = [
  getPostsWatcher,
  getPostWatcher,
  createPostWatcher,
  updatePostWatcher,
  deletePostWatcher
];

export function* postWatchers() {
  for (const watcher of postWatchersArray) {
    yield spawn(watcher);
  }
}
