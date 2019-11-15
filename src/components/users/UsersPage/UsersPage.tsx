import React from 'react';

import {
  Page,
  Input,
} from 'components/shared';

import {
  ConnectedUsersList,
} from '../UsersList';

export const UsersPage: React.FC = () => {
  const title = 'Users List';
  return (
    <Page
      title={title}
      headerControls={ <Input /> }
      pageContent= { <ConnectedUsersList /> }>
    </Page>
  );
};
