import React from 'react';
import styled from 'styled-components';

import {
  colors,
} from 'common';

import {
  Logo,
} from '../Logo';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 0.8rem 1.6rem;
  background-color: ${colors.primary};
  color: ${colors.onPrimary};
  box-shadow: 
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`;

export const Header : React.FC = () => {
  return (
    <StyledHeader>
      <Logo/>
    </StyledHeader>    
  );
};
