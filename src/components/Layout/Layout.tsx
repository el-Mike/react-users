import React from 'react';
import styled from 'styled-components';

import {
  colors,
} from 'common';

import {
  Grid,
  GridSection,
  Header,
  ContentContainer,
} from '../shared';

import {
  UsersPage,
} from '../users';

const StyledLayout = styled.div`
  background-color: ${colors.background};
  color: ${colors.onBackground}
`;

export const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <Grid>
        <GridSection>
          <Header />
        </GridSection>

        <GridSection>
          <ContentContainer>
            <UsersPage />
          </ContentContainer>
        </GridSection>
      </Grid>
    </StyledLayout>
  )
};
