import React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const NavLinks = styled(List)`
  display: flex;
`;

const links = ['About', 'Issues', 'News'];

export default props => {
  return (
    <NavLinks>
      {links.map(link => (
        <ListItem key={link}>
          <Button color="secondary">About</Button>
        </ListItem>
      ))}
      <ListItem>
        <Button color="secondary" variant="contained">
          Act
        </Button>
      </ListItem>
    </NavLinks>
  );
};
