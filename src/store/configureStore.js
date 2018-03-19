// @flow
import 'rxjs/Rx';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import type { Store, Reducer } from 'redux';
import shotsReducer from './shots/reducers';
import { shotsEpic, refreshEpic } from './shots/epics';
import type { AppState, Action } from '../lib/types';

type Reducers = Array<Reducer>;

function configureStore(
  reducers: Reducers = {},
): Store<AppState, Action> {
  const rootEpic = combineEpics(shotsEpic, refreshEpic);
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const combinedReducers = combineReducers({
    shots: shotsReducer,
    ...reducers,
  });
  const store = createStore(
    combinedReducers,
    applyMiddleware(epicMiddleware),
  );
  return store;
}

export default configureStore;
