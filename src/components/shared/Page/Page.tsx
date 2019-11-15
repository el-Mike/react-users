import React from 'react';
import styled from 'styled-components';

import {
  colors,
} from 'common';

import {
  Divider,
} from '../Divider';

import {
  PageTitle,
} from '../PageTitle';

const PageHeader = styled.div`
  display: flex;
  padding: .8rem;
  justify-content: space-between;
`;

const HeaderControls = styled.div`
display: flex;
justify-content: flex-end;
`;

const PageContent = styled.div`
  display: flex;
  width: 100%;
  padding: .8rem 0;
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: .8rem 0;
`;

interface PageProps {
  title: string;
  headerControls: React.ReactNode;
  pageContent: React.ReactNode;
}

export const Page: React.FC<PageProps> = props => {
  return (
    <StyledPage>
      <PageHeader>
        <PageTitle>
          {props.title}
        </PageTitle>

        <HeaderControls>
          {props.headerControls}
        </HeaderControls>
      </PageHeader>

      <Divider color={colors.onBackground}/>

      <PageContent>
        {props.pageContent}
      </PageContent>
    </StyledPage>
  );
};
