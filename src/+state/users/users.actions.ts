import {
  UserModel,
} from 'models';

export const LOAD_USERS         = '[Users] Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';

export interface LoadUsersAction {
  type: typeof LOAD_USERS;
}

export interface LoadUsersSuccessAction {
  type: typeof LOAD_USERS_SUCCESS;
  users: UserModel[];
}

export type UsersAction =
  | LoadUsersAction
  | LoadUsersSuccessAction;

export function loadUsers(): UsersAction {
  return {
    type: LOAD_USERS,
  }
};

export function loadUsersSuccess(users: UserModel[]): UsersAction {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}
