// @flow
import type { ID } from '../../lib/types';

export type User = {
  id: ID,
  name: string,
  username: string,
  avatarURL: string,
};

export type Users = Array<User>;
