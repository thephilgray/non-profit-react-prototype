import React from 'react';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Button from '@material-ui/core/Button/Button';

const news = [
  {
    title: 'US scientists try 1st gene editing in the body',
    date: '6/12/2018',
    lead:
      'OAKLAND, Calif. (AP) — Scientists for the first time have tried editing a gene inside the body in a bold attempt to permanently change a person’s DNA to cure a disease.',
    featured: false
  },
  {
    title: 'Amount of straws, plastic pollution is huge',
    date: '6/14/2018',
    lead:
      'WASHINGTON (AP) — Cities and nations are looking at banning plastic straws and stirrers in hopes of addressing the world’s plastic pollution problem. The problem is so large, though, that scientists say that’s not nearly enough.',
    featured: false
  },
  {
    title: 'Why Europe still has so many measles outbreaks',
    date: '6/17/2018',
    lead:
      'LONDON (AP) — While parts of the world have all but banished measles, Europe is still getting hit with large outbreaks where some people don’t get vaccinated.',
    featured: false
  },
  {
    title: 'New US weather satellite can’t keep cool, could hurt photos',
    date: '6/1/2018',
    lead:
      'CAPE CANAVERAL, Fla. (AP) — The nation’s newest weather satellite, launched less than three months ago, has a serious cooling problem that could affect the quality of its pictures.',
    featured: true,
    image: 'newsGrid__featureImage.png'
  },
  {
    title: 'Forecasters predict Central Pacific could see 6 hurricanes',
    date: '5/1/2018',
    lead:
      'HONOLULU (AP) — The Central Pacific could see anywhere from three to six hurricanes over the next six months, forecasters predicted Wednesday. That would be an increase over the two named storms last year.',
    featured: true,
    image: 'newsGrid__featureImage-2.png'
  }
];

const sortByDateDescending = (a, b) => new Date(b.date) - new Date(a.date);

const latest = news
  .filter(article => !article.featured)
  .sort(sortByDateDescending);

const features = news
  .filter(article => article.featured)
  .sort(sortByDateDescending);

export default props => (
  <Container>
    <Grid container spacing={32}>
      <Grid item xs={12} style={{ paddingTop: '48px' }}>
        <Typography variant="display2" style={{ textAlign: 'center' }}>
          News
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        {latest.map((article, i) => (
          <Card key={article.title}>
            <CardContent>
              <h3>{article.title}</h3>
              <p>{article.lead}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} sm={6}>
        {features.map((article, i) => (
          <Card key={article.title}>
            <CardMedia
              style={{ paddingTop: '20%' }}
              image={require(`assets/img/${article.image}`)}
              title={article.title}
            />
            <CardContent>
              <h3>{article.title}</h3>
              <p>{article.lead}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Button size="large" fullWidth color="secondary">
          More News
        </Button>
      </Grid>
    </Grid>
  </Container>
);
