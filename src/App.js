import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey700,
  cyan500
} from 'material-ui/styles/colors';
import NavBar from './Components/NavBar/navBar';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey700,
    primary2Color: '#0097A7',
    primary3Color: '#B2EBF2',
    accent1Color: cyan500,
    accent2Color: '#FF5722',
    accent3Color: '#FF5722',
    textColor: '#212121',
    borderColor: '#BDBDBD',
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <NavBar title="Clarity Counseling Center" />
          <Isvg src={require('../assets/images/CCCLogoTopRight.svg')} />
          <img className="main-image" src={require('../assets/images/skyandsea.jpg')} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
