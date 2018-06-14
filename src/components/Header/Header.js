import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderLinks from './HeaderLinks';
import { Hidden } from '@material-ui/core';

import Spacer from 'components/Grid/Spacer';

const StyledMenuButton = styled(IconButton)`
  && {
    margin-right: 20px;
  }
`;
const StyledAppBar = styled(AppBar)`
  && {
    height: 100px;
    display: flex;
    justify-content: center;
    background: #d6d6d6;
  }
`;
const NavbarLogo = styled('img')`
  max-width: 200px;
`;
const ToolBarBrand = styled('div')``;
const StyledToolBar = styled(ToolBar)``;

class Header extends Component {
  render() {
    return (
      <StyledAppBar position="fixed">
        <StyledToolBar>
          <Hidden mdUp>
            <StyledMenuButton aria-label="Menu">
              <MenuIcon />
            </StyledMenuButton>
          </Hidden>
          <ToolBarBrand>
            <NavbarLogo
              src={require('../../assets/img/navbar__logo.svg')}
              alt="Non-Profit Logo"
            />
          </ToolBarBrand>
          <Hidden smDown>
            <Spacer />
            <HeaderLinks />
          </Hidden>
        </StyledToolBar>
      </StyledAppBar>
    );
  }
}

export default Header;
