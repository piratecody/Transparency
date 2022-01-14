import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { Outlet, Link } from "react-router-dom";

import {getRecords} from './actions/records';
import Form from './components/Form/Form';
import Records from './components/Records/Records';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecords());
    }, [currentId, dispatch]);
    return (
        <div>
      <h1>Home</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/about">About</Link> |{" "}
        <Link to="/records">Records</Link>
      </nav>
      <Outlet />
    </div>
    )
}

export default App;