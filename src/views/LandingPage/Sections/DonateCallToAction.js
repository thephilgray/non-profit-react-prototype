import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid';

const amounts = [10, 20, 50, 100];

export default props => (
  <Container>
    <Grid container justify="center" spacing={32}>
      <Grid item xs={12} style={{ paddingTop: '48px' }}>
        <Typography variant="display2" style={{ textAlign: 'center' }}>
          Donate to Make an Impact
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            {amounts.map(amount => (
              <Button
                variant="contained"
                key={amount}
                style={{ margin: '6px 8px' }}
              >
                <Typography variant="display1">${amount}</Typography>
              </Button>
            ))}
            <Button
              color="secondary"
              variant="contained"
              style={{ margin: '6px 8px' }}
            >
              <Typography color="primary" variant="display1">
                GO!
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);
