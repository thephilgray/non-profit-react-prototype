import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const aboutFeatures = [
  {
    title: 'see how our work impacts thousands of lives each day.',
    image: 'about__featureImage'
  },
  {
    title: 'see how your involvement creates lasting impact.',
    image: 'about__featureImage-2'
  }
];

export default props => (
  <Container>
    <Grid container justify="center" spacing={32}>
      <Grid item xs={12} style={{ paddingTop: '48px' }}>
        <Typography variant="display1" style={{ textAlign: 'center' }}>
          Non-Profit is dedicated to solving some of the most complex issues
          facing our world and the people who inhabit it.
        </Typography>
      </Grid>
      {aboutFeatures.map(feature => (
        <Grid key={feature.title} item xs={6}>
          <Card>
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image={require(`assets/img/${feature.image}.png`)}
            />
            <CardContent>
              <Typography component="h2" variant="headline">
                {feature.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);
