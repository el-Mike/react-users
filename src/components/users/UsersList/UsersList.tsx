import React from 'react';

import styled from 'styled-components';

import {
  UserModel,
} from 'models';

import {
  LoadingIndicator,
  NoContent,
} from 'components/shared';

import {
  User,
} from '../User';

interface UsersListProps {
  loading: boolean;
  users: UserModel[];
}

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 .8rem;
`;

export const UsersList: React.FC<UsersListProps> = props => {
  const { users, loading } = props;
  return (
    <StyledUsersList>
      {loading ? (
        <LoadingIndicator />
      ) : (
        users.length > 0 ? (
          users.map((user, i) => (
            <User user={user} index={i + 1} key={user.id}/>
          ))
        ) : (
          <NoContent />
        )
      )}
    </StyledUsersList>
  );
};
