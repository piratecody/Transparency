import { Container, Typography, Paper, Card, CardContent, Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getNumRecords} from '../../actions/records';
import useStyles from './styles';


export default function HomePage() {
    const classes = useStyles();

    const numRecords = useSelector((state) => state.recordStats);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getNumRecords());
    }, [numRecords, dispatch]);

    return (
      <main style={{padding: 0}}>
        
        <div className={classes.heroImage}>
            <h1 className={classes.heroText}>Welcome to the Local Transparency Project</h1>
        </div>

        <Container>
          <Grid container>
            
            <Grid item xs={3}>
              <Box className={classes.cardRow}>
                <Card className={classes.homeCard}>
                  <CardContent>
                    <Typography variant="h4">Explore</Typography>
                    <Typography variant="h2">{numRecords}</Typography>
                    <Typography variant="h4">Records</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={9}>
              <Paper className={classes.textContainer}>
                  <Typography>Body</Typography>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Box className={classes.cardRow}>
                <Card className={classes.homeCard}>
                  <CardContent>
                    <Typography variant="h4">Explore</Typography>
                    <Typography variant="h2">{numRecords}</Typography>
                    <Typography variant="h4">Records</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={9}>
              <Paper className={classes.textContainer}>
                  <Typography>Body</Typography>
              </Paper>
            </Grid>

            
          </Grid>
        </Container>
        
      </main>
    );
  }