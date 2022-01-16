import React, {useState, useEffect} from 'react';
import { Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { Outlet} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core';

import {getRecords} from './actions/records';
import Navbar from './components/Navbar/Navbar';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Outfit'
    ].join(','),
  },
},)

const App = () => {
    return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar></Navbar>
        
          <Outlet />
        
      </div>
    </ThemeProvider>
    )
}

export default App;