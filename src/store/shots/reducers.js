// @flow
import { uniq, isEmpty } from 'lodash';
import { combineReducers } from 'redux';
import updateCollection from '../../lib/updateCollection';
import type {
  Action,
  ShotsState,
  ShotCategory,
  ShotsResponse,
} from './types';

type ShotsTypeState = Array<number>;

const defaultState: ShotsState = {
  all: [],
  debutShots: [],
  popularShots: [],
  recentShots: [],
  lastUpdated: 0,
  isLoading: false,
  isRefreshing: false,
  isLoadingMore: false,
};

const shotsTypeReducer = combineReducers({
  recentShots: createShotTypeReducer('recent'),
  popularShots: createShotTypeReducer('popular'),
  debutShots: createShotTypeReducer('debuts'),
});

function shotsReducer(
  state: ShotsState = defaultState,
  action: Action = {},
): ShotsState {
  switch (action.type) {
    case 'REFRESH_SHOTS':
      return { ...state, isRefreshing: true };
    case 'REQUEST_SHOTS':
      return onRequestShots(state, action);
    case 'RECEIVE_SHOTS':
      return onReceiveShots(state, action);
    case 'RECEIVE_FRESH_SHOTS':
      return onReceiveFreshShots(state, action);
    default:
      return state;
  }
}

function onRequestShots(state, action) {
  const { page } = action.payload;
  if (page === 1) {
    return { ...state, isLoading: true };
  }
  return { ...state, isLoadingMore: true };
}

function onReceiveFreshShots(state, action) {
  const { popularShots, recentShots, debutShots } = state;
  const { response } = action.payload;
  const shotsTypeState = shotsTypeReducer(
    { popularShots, recentShots, debutShots },
    action,
  );
  return {
    ...state,
    ...shotsTypeState,
    all: updateCollection(state.all, response.shots, (shot) => shot.id),
    lastUpdated: Date.now(),
    isLoading: false,
    isLoadingMore: false,
    isRefreshing: false,
  };
}

function onReceiveShots(state, action) {
  const { popularShots, recentShots, debutShots } = state;
  const { response } = action.payload;
  const shotsTypeState = shotsTypeReducer(
    { popularShots, recentShots, debutShots },
    action,
  );
  const updated = isEmpty(response.shots)
    ? {}
    : { lastUpdated: Date.now() };
  return {
    ...state,
    ...shotsTypeState,
    ...updated,
    all: updateCollection(state.all, response.shots, (shot) => shot.id),
    isLoading: false,
    isRefreshing: false,
    isLoadingMore: false,
  };
}

function createShotTypeReducer(type: ShotCategory) {
  return (state: ShotsTypeState = [], action: Action) => {
    if (
      action.type === 'RECEIVE_SHOTS' &&
      action.payload.response.type === type
    ) {
      const { response } = action.payload;
      return combineShots(state, response);
    }
    if (
      action.type === 'RECEIVE_FRESH_SHOTS' &&
      action.payload.response.type === type
    ) {
      return action.payload.response.shots.map((shot) => shot.id);
    }
    return state;
  };
}

function combineShots(
  previousState: ShotsTypeState,
  shotsResponse: ShotsResponse,
) {
  return uniq([
    ...previousState,
    ...shotsResponse.shots.map(({ id }) => id),
  ]);
}

export default shotsReducer;
