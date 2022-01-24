import React, {useState, useEffect} from 'react';
import {Button, Typography, Paper, TextField, Grid} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';

const FilterForm = ({currentId, setCurrentId}) => {
    const [recordData, setRecordData] = useState({
        owner: "",
        period: "",
        year: "",
        office: "",
        municipality: "",
        file: ""

    });
    const record = useSelector((state) => (currentId ? state.records.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {

        if(record){
            setRecordData(record);
        }

    }, [record]);
    const handleSubmit = (e) =>{

        e.preventDefault();

        if(currentId){
            
        } else {
            
        }

    };
    const clear = () =>{

        setCurrentId(null);
        setRecordData({owner: '', period: '', year: '', office: '', municipality: '', file:''});
    };

    const ownerOptions = [
        {label: 'Citizens for Antaramian', owner: "Citizens for Antaramian"},
    ]

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div style={{width: "100%", textAlign:"center"}}>
                    <Typography variant="h6">Filter Records</Typography>
                </div>

                <div style={{width: "100%"}}>
                    <Grid container>
                        <Grid item xs={6}><Autocomplete options={ownerOptions} name="owner" variant="outlined" label="Document Owner" renderInput={(params) => <TextField {...params} label="Owner"/>}/></Grid>
                        <Grid item xs={6}><Autocomplete options={ownerOptions} name="period" variant="outlined" label="Filing Period" renderInput={(params) => <TextField {...params} label="Filing Period" />}/></Grid>
                        <Grid item xs={4}><Autocomplete options={ownerOptions} name="year" variant="outlined" label="Filing Year" renderInput={(params) => <TextField {...params} label="Filing Year" />}/></Grid>
                        <Grid item xs={4}><Autocomplete options={ownerOptions} name="office" variant="outlined" label="Office Sought" renderInput={(params) => <TextField {...params} label="Office" />}/></Grid>
                        <Grid item xs={4}><Autocomplete options={ownerOptions} name="municipality" variant="outlined" label="Municipality" renderInput={(params) => <TextField {...params} label="Municipality" />}/></Grid>
                    
                    

                    
                    </Grid>

                    <div>
                        <Grid container>
                            <Grid item xs={6}><Button className={classes.buttonSubmit} variant="contained" size="large" type="submit">Filter</Button></Grid>
                            <Grid item xs={6}><Button className={classes.buttonClear} variant="contained" size="large" onClick={clear}>Clear</Button></Grid>
                        </Grid>
                    </div>
                    
                </div>
                
            </form>
        </Paper>
    );
}

export default FilterForm;