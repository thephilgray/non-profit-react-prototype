import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Button from '@material-ui/core/Button/Button';
import {
  CardHeader,
  Avatar,
  IconButton,
  MoreVertIcon
} from '@material-ui/core';

const tweets = [
  {
    date: 'May 25',
    content:
      'After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj'
  },
  {
    date: 'May 25',
    content:
      'After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj'
  },
  {
    date: 'May 25',
    content:
      'After a giant asteroid hit #Earth about 66 million years ago, the planet’s climate went on a roller coaster ride. https://t.co/sfdsfdsflkj'
  }
];

export default props => (
  <Container>
    <Grid container justify="center" spacing={32}>
      <Grid item xs={12} style={{ paddingTop: '48px' }}>
        <Typography variant="display2" style={{ textAlign: 'center' }}>
          Connect With Us
        </Typography>
      </Grid>
      {tweets.map(tweet => (
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  style={{ width: '99px', height: '99px' }}
                  src={require(`assets/img/tweetCard__userAvatar.png`)}
                />
              }
              title="@therealnonprofit"
              subheader={tweet.date}
            />
            <CardContent>
              <Typography component="p">{tweet.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);
