import React, { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Page,
  Input,
} from 'components/shared';

import {
  useDebounceInput,
  match,
} from 'common';

import {
  UsersState,
  loadUsers,
  searchUser,
} from '+state';

import {
  UsersList,
} from '../UsersList';

const PAGE_TITLE = 'Users List';
const INPUT_PLACEHOLDER = 'Search...';

const usersSelector = (state: UsersState) =>
  Object.keys(state.users)
    .map(key => state.users[key])
    .filter(user => match(user.name, state.searchValue));

export const UsersPage: React.FC = () => {
  const handleSearch = (value: string) => dispatch(searchUser(value));
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => setInputText(e.currentTarget.value);

  const users = useSelector(usersSelector);
  const loading = useSelector((state: UsersState) => state.loading);
  const dispatch = useDispatch();
  const { inputText, setInputText } = useDebounceInput((handleSearch));

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Page
      title={PAGE_TITLE}
      headerControls={ <Input
        value={inputText}
        onChange={onInputChange}
        placeholder={INPUT_PLACEHOLDER}

      /> }
      pageContent= { <UsersList users={users} loading={loading} /> }>
    </Page>
  );
};
