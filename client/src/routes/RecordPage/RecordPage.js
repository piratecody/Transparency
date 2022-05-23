import React, {useState, useEffect} from 'react';
import { Container, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import {getRecords} from '../../actions/records';
import Form from '../../components/Form/Form';
import Records from '../../components/Records/Records';
import FilterForm from '../../components/FilterForm/FilterForm';
import useStyles from './styles';

const RecordPage = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecords());
    }, [currentId, dispatch]);
    return (
        <main>
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                    <FilterForm/>
                        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={4}>
                            <Grid item xs={12} sm={7}>
                                <Records setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </main>
    )
}

export default RecordPage;