import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Container from 'components/Container/Container';

import JoinUsForm from 'components/JoinUsForm/JoinUsForm';

// TODO: Add parllax effect

const Parallax = ({ className, children, ...rest }) => (
  <div className={className} {...rest}>
    {children}
  </div>
);
const StyledParallax = styled(Parallax)`
    background-image: url('${props => props.image}');
    height: 60vh;
    overflow: hidden;
    position: relative;
    background-position: center center;
    background-size: cover;
    margin: 0;
    padding: 0;
    border: 0;
    display: flex;

    justify-content: center;
`;

export default props => (
  <Grid item xs={12}>
    <StyledParallax image={require('assets/img/hero__background.png')}>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <JoinUsForm hero />
          </Grid>
        </Grid>
      </Container>
    </StyledParallax>
  </Grid>
);
