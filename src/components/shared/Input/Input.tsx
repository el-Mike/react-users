import styled from 'styled-components';

import {
  colors,
} from 'common';

export const Input = styled.input`
  height: 1rem;
  font-size: 1rem;
  border-width: 2px;
  padding: .8rem;
  border-radius: 50px;
  border: 2px solid ${colors.primary};

  :focus {
    outline: none;
  }
`;
