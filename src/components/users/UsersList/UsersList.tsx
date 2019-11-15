import React from 'react';
import { connect } from 'react-redux'

import styled from 'styled-components';

import {
  UserModel,
} from 'models';

import {
  User,
} from '../User';

import {
  UsersState,
} from '+state';

interface UsersListProps {
  users: UserModel[];
}

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 .8rem;
`;

export const UsersList: React.FC<UsersListProps> = props => {
  return (
    <StyledUsersList>
      {props.users.map((user, i) => (
        <User user={user} index={i} />
      ))}
    </StyledUsersList>
  );
};

const mapStateToProps = (state: UsersState) => ({
  users: Object.keys(state.users).map(key => state.users[key]),
});

export const ConnectedUsersList = connect(
  mapStateToProps,
)(UsersList);
