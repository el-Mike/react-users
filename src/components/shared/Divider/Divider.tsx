import styled from 'styled-components';

import {
  colors,
} from 'common';

export const Divider = styled.hr`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => colors[props.color as string] || colors.primary};
`;
