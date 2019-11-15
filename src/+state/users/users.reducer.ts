import {
  UserModel,
  EntitiesMap,
} from 'models';

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  UsersAction,
} from './users.actions';

export interface UsersState {
  users: EntitiesMap<UserModel>;
  loading: boolean;
  searchResult: UserModel[];
}

const initialState: UsersState = {
  users: {
    ['1']: {
      id: 1,
      name: 'Leanne Graham',
      username: "Bret",
    },
    ['2']: {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
    },
    ['3']: {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha'
    }
  },
  loading: false,
  searchResult: [],
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

    default: {
      return state;
    }
  }
}
