import React from 'react';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

import Record from './Record/Record';
import useStyles from './styles';

const Records = () => {
    const records = useSelector((state) => state.records);
    const classes = useStyles();
    console.log(records);
    return(
        !records.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alightItems="stretch" spacing={3}>

                {
                    records.map((record) => (
                        <Grid key={record._id} item xs={12} sm={6}>
                            <Record record={record} />
                        </Grid>
                    ))
                }

            </Grid>
        )
    );
}

export default Records;