import { createStore } from 'redux';

import {
  usersReducer,
} from './users';

export const store = createStore(usersReducer);
