import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import { Typography } from '@material-ui/core';

const FooterLogo = styled('img')`
  max-width: 200px;
`;

const StyledContainer = styled(Container)`
  text-align: center;
  color: #fff;
`;

export default props => (
  <StyledContainer>
    <Grid container spacing={32} alignItems="center" justify="center">
      <Grid item xs={12}>
        <FooterLogo src={require(`assets/img/footer__logo.svg`)} />
      </Grid>
      <Grid item xs={12}>
        <SocialIcons />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading" color="primary">
          &copy; 2018 non-profit
        </Typography>
      </Grid>
    </Grid>
  </StyledContainer>
);
