import { compact, find } from 'lodash';
import type { ShotsState, Shots } from '../../lib/types';

function selectDebutShots(shots: ShotsState): Shots {
  return compact(
    shots.debutShots.map((id) =>
      find(shots.all, (shot) => shot.id === id),
    ),
  );
}

function selectRecentShots(shots: ShotsState): Shots {
  return compact(
    shots.recentShots.map((id) =>
      find(shots.all, (shot) => shot.id === id),
    ),
  );
}

function selectPopularShots(shots: ShotsState): Shots {
  return compact(
    shots.popularShots.map((id) =>
      find(shots.all, (shot) => shot.id === id),
    ),
  );
}

export { selectDebutShots, selectRecentShots, selectPopularShots };
