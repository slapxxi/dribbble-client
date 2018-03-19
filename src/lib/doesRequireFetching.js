// @flow
import type {
  Action,
  AppStore,
  ShotsState,
  ShotCategory,
} from './types';

function doesRequireFetching(action: Action, store: AppStore) {
  const shotsState: ShotsState = store.getState().shots;
  if (action.type === 'FETCH_SHOTS') {
    const { type, page } = action.payload;
    if (page === 1 && shotsState.lastUpdated === 0) {
      return true;
    }
    if (page !== 1) {
      return true;
    }
    if (matchTypeToState(shotsState, type).length === 0) {
      return true;
    }
    return false;
  }
  return false;
}

function matchTypeToState(state: ShotsState, type: ShotCategory) {
  if (type === 'popular') {
    return state.popularShots;
  }
  if (type === 'recent') {
    return state.recentShots;
  }
  if (type === 'debuts') {
    return state.debutShots;
  }
  return state.all;
}

export default doesRequireFetching;
