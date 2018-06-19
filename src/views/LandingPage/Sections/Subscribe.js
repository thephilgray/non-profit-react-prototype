import React from 'react';

import Container from 'components/Container/Container';
import { Grid, Typography } from '@material-ui/core';
import JoinUsForm from '../../../components/JoinUsForm/JoinUsForm';

export default props => (
  <Container>
    <Grid container spacing={32} alignItems="center">
      <Grid item xs={12} md={3} style={{ paddingTop: '48px' }}>
        <Typography variant="display2" style={{ textAlign: 'center' }}>
          Join Us Today
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <JoinUsForm />
      </Grid>
    </Grid>
  </Container>
);
