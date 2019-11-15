import React from 'react';
import styled from 'styled-components';

const StyledLoadingIndicator = styled.div`
  width: 100%;
  font-size: .8rem;
  color: #fff;
`;

export const LoadingIndicator: React.FC = () => {
  return (
    <StyledLoadingIndicator>
      <p>Loading...</p>
    </StyledLoadingIndicator>
  )
};
