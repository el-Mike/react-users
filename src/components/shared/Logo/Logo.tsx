import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex-inline;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <span>React-Users</span>
    </StyledLogo>
  );
};
