//redux-saga
import { all } from 'redux-saga/effects';
//watchers
import { postWatchers } from '@/entities/post';

export function* rootSaga() {
  yield all([postWatchers()]);
}
