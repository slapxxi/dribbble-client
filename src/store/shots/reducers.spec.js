import shotsReducer from './reducers';
import {
  refreshShots,
  receiveFreshShots,
  requestShots,
  receiveShots,
} from './actions';
import type { ShotsState } from '../../lib/types';

const _ = undefined;

describe('requesting shots', () => {
  it('updates loading more status on subsequent pages', () => {
    const state = shotsReducer(_, requestShots(2));
    expect(state).toHaveProperty('isLoading', false);
    expect(state).toHaveProperty('isLoadingMore', true);
  });

  it('updates loading status', () => {
    const state = shotsReducer(_, requestShots());
    expect(state).toHaveProperty('isLoading', true);
    expect(state).toHaveProperty('isLoadingMore', false);
  });
});

describe('loading next page of shots', () => {
  it('sets `isLoadingMore` status', () => {
    const newState = shotsReducer(_, refreshShots());
    expect(newState).toHaveProperty('isRefreshing', true);
  });
});

describe('receiving shots', () => {
  it('modifies time of last update', () => {
    const state = shotsReducer(
      _,
      receiveShots({
        type: 'popular',
        shots: [mockShot(0)],
      }),
    );
    expect(state.lastUpdated).not.toEqual(0);
  });

  it('does not modify time of last update when shots are empty', () => {
    const state = shotsReducer(
      _,
      receiveShots({
        type: 'popular',
        shots: [],
      }),
    );
    expect(state.lastUpdated).toEqual(0);
  });

  it('sets loading status to default', () => {
    const newState = shotsReducer(
      mockState({ isLoading: true }),
      receiveShots({
        shots: [],
        type: 'popular',
      }),
    );
    expect(newState).toHaveProperty('isLoading', false);
    expect(newState).toHaveProperty('isLoadingMore', false);
  });

  it('does not duplicate shots', () => {
    const initialState = shotsReducer(
      _,
      receiveShots({
        type: 'popular',
        shots: [mockShot(0), mockShot(1), mockShot(2)],
      }),
    );
    const newState = shotsReducer(
      initialState,
      receiveShots({
        type: 'popular',
        shots: [mockShot(0), mockShot(3)],
      }),
    );
    expect(newState.all).toHaveLength(4);
    expect(newState).toHaveProperty('popularShots', [0, 1, 2, 3]);
  });

  it('saves recent shots', () => {
    const state = shotsReducer(
      _,
      receiveShots({
        type: 'recent',
        shots: [mockShot(0), mockShot(1), mockShot(2)],
      }),
    );
    expect(state).toHaveProperty('recentShots', [0, 1, 2]);
  });

  it('saves popular shots', () => {
    const state = shotsReducer(
      _,
      receiveShots({
        type: 'popular',
        shots: [mockShot(0), mockShot(1), mockShot(2)],
      }),
    );
    expect(state).toHaveProperty('popularShots', [0, 1, 2]);
    expect(state.all).toHaveLength(3);
  });

  it('saves debut shots', () => {
    const state = shotsReducer(
      _,
      receiveShots({
        type: 'debuts',
        shots: [mockShot(0), mockShot(1), mockShot(2)],
      }),
    );
    expect(state).toHaveProperty('debutShots', [0, 1, 2]);
  });
});

describe('receiving fresh shots', () => {
  let state;

  beforeEach(() => {
    state = shotsReducer(
      _,
      receiveShots({
        shots: [mockShot(0), mockShot(1)],
        type: 'popular',
      }),
    );
    state = shotsReducer(
      state,
      receiveShots({
        shots: [mockShot(2), mockShot(3)],
        type: 'recent',
      }),
    );
    state = shotsReducer(
      state,
      receiveShots({
        shots: [mockShot(4), mockShot(5)],
        type: 'debuts',
      }),
    );
  });

  it('replaces shots of particular category only', () => {
    const newState = shotsReducer(
      state,
      receiveFreshShots({
        type: 'recent',
        shots: [mockShot(6), mockShot(7)],
      }),
    );
    expect(newState.all).toHaveLength(8);
    expect(newState).toHaveProperty('recentShots', [6, 7]);
  });

  it('replaces outdated shots with new ones preserving order', () => {
    const newState = shotsReducer(
      state,
      receiveFreshShots({
        type: 'popular',
        shots: [mockShot(0, 20), mockShot(10), mockShot(1, 20)],
      }),
    );
    expect(newState).toHaveProperty('all', [
      mockShot(0, 20),
      mockShot(1, 20),
      mockShot(2),
      mockShot(3),
      mockShot(4),
      mockShot(5),
      mockShot(10),
    ]);
    expect(newState).toHaveProperty('popularShots', [0, 10, 1]);
  });
});

function mockState(fields): ShotsState {
  return {
    all: [],
    popularShots: [],
    recentShots: [],
    debutShots: [],
    isLoading: false,
    isLoadingMore: false,
    isRefreshing: false,
    ...fields,
  };
}

function mockShot(id, likesCount = 10, viewsCount = 10) {
  return {
    id,
    likesCount,
    viewsCount,
    commentsCount: 10,
    author: 1,
    images: { normal: '', teaser: '' },
    description: '',
  };
}
