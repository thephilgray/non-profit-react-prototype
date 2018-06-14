import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#EEEDED',
      dark: '#C4C4C4'
    },
    secondary: {
      light: '#D6D6D6',
      main: '#303030',
      dark: '#000'
    }
  }
});

const withRoot = Component => {
  const WithRoot = props => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };
  return WithRoot;
};

export default withRoot;
