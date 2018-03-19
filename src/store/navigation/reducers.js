import type { NavigationState, NavigationAction } from './types';

function navigationReducer(
  state: NavigationState,
  action: NavigationAction,
) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state;
    case 'CHANGE_CATEGORY':
      return state;
    default:
      return state;
  }
}

export default navigationReducer;
