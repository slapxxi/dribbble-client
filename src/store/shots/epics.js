// @flow
import { Observable as Ob } from 'rxjs/Rx';
import type { Observable } from 'rxjs';
import fetchShots from '../../lib/fetchShots';
import doesRequireFetching from '../../lib/doesRequireFetching';
import {
  requestShots,
  receiveShots,
  receiveFreshShots,
} from './actions';
import type { Action, AppStore } from '../../lib/types';

function shotsEpic(
  actions: Observable<Action>,
  store: AppStore,
): Observable<Action> {
  return actions
    .filter(({ type }) => type === 'FETCH_SHOTS')
    .filter((action) => doesRequireFetching(action, store))
    .mergeMap(({ payload }: Action) =>
      Ob.concat(
        Ob.of(requestShots(payload.page)),
        Ob.fromPromise(fetchShots(payload.type, payload.page)).map(
          receiveShots,
        ),
      ),
    );
}

function refreshEpic(actions: Observable<Action>): Observable<Action> {
  return actions
    .filter(({ type }) => type === 'REFRESH_SHOTS')
    .mergeMap(({ payload }) => Ob.fromPromise(fetchShots(payload)))
    .map(receiveFreshShots);
}

export { shotsEpic, refreshEpic };
export default shotsEpic;
