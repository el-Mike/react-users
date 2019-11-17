import {
  UserModel,
  EntitiesMap,
} from 'models';

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  UsersAction,
  SEARCH_USER,
} from './users.actions';

export interface UsersState {
  users: EntitiesMap<UserModel>;
  loading: boolean;
  searchResult: UserModel[];
  searchValue: string;
}

const initialState: UsersState = {
  users: {},
  loading: false,
  searchResult: [],
  searchValue: '',
};

export function usersReducer(state: UsersState = initialState, action: UsersAction): UsersState {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.users.reduce(
          (total, current) => ({ ...total, [current.id]: current }),
          {}
        )
      };
    }

    case SEARCH_USER: {
      return {
        ...state,
        searchValue: action.searchValue,
      };
    }

    default: {
      return state;
    }
  }
}
