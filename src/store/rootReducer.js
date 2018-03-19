// @flow
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import shotsReducer from './shots/reducers';
import type { AppState, Action } from '../lib/types';

const rootReducer: Reducer<AppState, Action> = combineReducers({
  shots: shotsReducer,
});

export default rootReducer;
