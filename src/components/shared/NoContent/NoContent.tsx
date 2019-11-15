import React from 'react';
import styled from 'styled-components';

const StyledNoContent = styled.div`
  width: 100%;
  font-size: .8rem;
  color: #fff;
`;

export const NoContent: React.FC = () => {
  return (
    <StyledNoContent>
      <p>No content available.</p>
    </StyledNoContent>
  )
};
