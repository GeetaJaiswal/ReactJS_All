import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import Employees from '../Pages/Employees/Employees';


const theme = createTheme({
  palette: {
    primary: {
      main: '#253053',
      light: '#3c44b126',
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      }
    },
    MuiRadio: {
      root: {
        color: "#253053",
      },
      colorSecondary: {
        '&$checked': {
          color: "#253053",
          disableRipple: "true",
        }
      }
    },
    MuiFormControl: {
      color: "#253053",
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    }
  }
})





const useStyles = makeStyles({
  // appMain: {
  //   width: "100%",
  //   paddingLeft: "320px",
  // }
})


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
    {/* <div className={classes.appMain}>jdkfc</div> */}
    <Header/>
    <Employees/>
    <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
