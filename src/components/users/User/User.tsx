import React from 'react';
import styled from 'styled-components';

import {
  colors,
  phoneBreakpoint,
} from 'common';

import {
  UserModel,
} from 'models';

interface UserProps {
  index: number;
  user: UserModel;
}

const StyledUser = styled.div`
  display: flex;
  flex: 1;
  padding: .8rem;
  margin-bottom: .8rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: ${colors.onPrimary};
  border-radius: 5px;

  :hover {
    background-color: ${colors.primaryActive}
  }

  @media(max-width: ${phoneBreakpoint}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;

  @media(max-width: ${phoneBreakpoint}) {
    font-size: 1rem;
  }
`;

const Username = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;

  @media(max-width: ${phoneBreakpoint}) {
    margin-top: .2rem;
    font-size: .8rem;
  }
`;

export const User: React.FC<UserProps> = props => {
  const { index, user } = props;
  return (
    <StyledUser>
      <Name>{index}. {user.name}</Name>
      <Username>@ {user.username}</Username>
    </StyledUser>
  );
};
