import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Container from 'components/Container/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar/GridListTileBar';
import Button from '@material-ui/core/Button/Button';

const issueFeatures = [
  {
    title: 'Sustainability',
    image: 'issue_background-1'
  },
  {
    title: 'Research',
    image: 'issue_background-2'
  },
  {
    title: 'Relief',
    image: 'issue_background-3'
  }
];
const StyledGridListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
`;
const StyledGridList = styled(GridList)`
  transform: translateZ(0);
`;

const StyledGridListTileBar = styled(GridListTileBar)`
  text-transform: uppercase;
  text-align: center;
  width: 50%;
  border: 2px solid #fff;
  margin: 1em;
  left: auto !important;
`;

export default props => (
  <Container>
    <Grid container justify="center" spacing={32}>
      <Grid item xs={12} style={{ paddingTop: '48px' }}>
        <Typography variant="display2" style={{ textAlign: 'center' }}>
          Issues
        </Typography>
      </Grid>
      <StyledGridListWrapper>
        <StyledGridList>
          {issueFeatures.map((feature, i) => (
            <GridListTile
              key={feature.title}
              cols={i === 0 ? 2 : 1}
              rows={i === 0 ? 2 : 1}
            >
              <img
                src={require(`assets/img/${feature.image}.png`)}
                alt={feature.title}
              />

              <StyledGridListTileBar
                title={feature.title}
                titlePosition="bottom"
              />
            </GridListTile>
          ))}
        </StyledGridList>
      </StyledGridListWrapper>
      <Grid item xs={12}>
        <Button size="large" fullWidth color="secondary">
          More Issues
        </Button>
      </Grid>
    </Grid>
  </Container>
);
