import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from 'components/Container/Container';
import Typography from '@material-ui/core/Typography';

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

const JoinUsForm = styled('div')`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;

  form > * {
    width: 100%;
    margin: 1em 0;
  }
`;

const SocialIcons = styled('div')`
  i {
    font-size: 36px;
    margin-right: 16px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    label {
      color: rgb(255, 255, 255);
    }
    div {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
    }
    input {
      color: #fff;
    }
  }
`;

export default props => (
  <Grid item xs={12}>
    <StyledParallax image={require('assets/img/hero__background.png')}>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <JoinUsForm className="JoinUsForm">
              <Container>
                <Typography variant="display2" color="primary">
                  Join Us
                </Typography>
                <form>
                  <StyledTextField label="Name" />
                  <StyledTextField label="Email" />
                  <Button color="primary">Sign Up</Button>
                  <SocialIcons className="socialIcons">
                    <i className="fa fa-twitter" />
                    <i className="fa fa-youtube-play" />
                    <i className="fa fa-instagram" />
                  </SocialIcons>
                </form>
              </Container>
            </JoinUsForm>
          </Grid>
        </Grid>
      </Container>
    </StyledParallax>
  </Grid>
);
