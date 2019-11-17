import { ThunkDispatch } from 'redux-thunk';

import axios from 'axios';

import {
  apiConfig,
} from 'common';

import {
  UserModel,
} from 'models';

export const LOAD_USERS         = '[Users] Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';

export const SEARCH_USER = '[Users] Search User';

export interface LoadUsersAction {
  type: typeof LOAD_USERS;
}

export interface LoadUsersSuccessAction {
  type: typeof LOAD_USERS_SUCCESS;
  users: UserModel[];
}

export interface SearchUser {
  type: typeof SEARCH_USER;
  searchValue: string;
}

export type UsersAction =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | SearchUser;

export function loadUsers() {
  return (dispatch: ThunkDispatch<{}, {}, UsersAction>) => {
    axios.get(apiConfig.users).then(res => dispatch(loadUsersSuccess(res.data)));
  };
};

export function loadUsersSuccess(users: UserModel[]): UsersAction {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

export function searchUser(searchValue: string): UsersAction {
  return {
    type: SEARCH_USER,
    searchValue,
  };
}
