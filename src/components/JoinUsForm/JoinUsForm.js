import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from 'components/Container/Container';
import Typography from '@material-ui/core/Typography';
import SocialIcons from 'components/SocialIcons/SocialIcons';

// TODO: Add parllax effect

const JoinUsFormWrapper = styled('div')`
  width: 100%;
  background: ${props => (props.hero ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  color: ${props => (props.hero ? '#fff' : '#000')};
  text-align: center;

  form > * {
    width: 100%;
    margin: 1em 0;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    label {
      color: ${props => (props.hero ? '#fff' : '#000')};
    }
    div {
      border-bottom: 1px solid
        ${props => (props.hero ? 'rgba(255, 255, 255, 0.42)' : '#000')};
    }
    input {
      color: ${props => (props.hero ? '#fff' : '#000')};
    }
  }
`;

class JoinUsForm extends React.Component {
  static defaultProps = {
    hero: false
  };
  render() {
    return (
      <JoinUsFormWrapper className="JoinUsForm" hero={this.props.hero}>
        <Container>
          {this.props.hero ? (
            <Typography variant="display2" color="primary">
              Join Us
            </Typography>
          ) : null}
          <form>
            <StyledTextField hero={this.props.hero} label="Name" />
            <StyledTextField hero={this.props.hero} label="Email" />
            <Button
              color={this.props.hero ? 'primary' : 'secondary'}
              variant="raised"
            >
              Sign Up
            </Button>

            {this.props.hero ? <SocialIcons /> : null}
          </form>
        </Container>
      </JoinUsFormWrapper>
    );
  }
}

JoinUsForm.propTypes = {
  hero: PropTypes.bool
};
export default JoinUsForm;
