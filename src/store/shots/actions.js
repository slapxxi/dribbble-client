// @flow
import type { ShotsResponse, ShotCategory, Action } from './types';

function fetchShots(
  type: ShotCategory = 'popular',
  page: number = 1,
): Action {
  return { type: 'FETCH_SHOTS', payload: { type, page } };
}

function requestShots(page: number = 1): Action {
  return { type: 'REQUEST_SHOTS', payload: { page } };
}

function receiveShots(response: ShotsResponse): Action {
  return {
    type: 'RECEIVE_SHOTS',
    payload: { response },
  };
}

function receiveFreshShots(response: ShotsResponse): Action {
  return {
    type: 'RECEIVE_FRESH_SHOTS',
    payload: { response },
  };
}

function refreshShots(type: ShotCategory = 'popular') {
  return { type: 'REFRESH_SHOTS', payload: type };
}

export {
  receiveShots,
  requestShots,
  fetchShots,
  refreshShots,
  receiveFreshShots,
};
