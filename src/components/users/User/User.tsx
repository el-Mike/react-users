import React from 'react';
import styled from 'styled-components';

import {
  colors,
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
`;

const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

const Username = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;
`;

export const User: React.FC<UserProps> = props => {
  return (
    <StyledUser>
      <Name>{props.index + 1}. {props.user.name}</Name>
      <Username>@ {props.user.username}</Username>
    </StyledUser>
  );
};
