import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import {createRecord, updateRecord, deleteRecord} from '../../actions/records';

const Form = ({currentId, setCurrentId}) => {
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
            dispatch(updateRecord(currentId, recordData));
        } else {
            dispatch(createRecord(recordData));
        }

        clear();

        
        
    };
    const clear = () =>{

        setCurrentId(null);
        setRecordData({owner: '', period: '', year: '', office: '', municipality: '', file:''});


    };
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Record</Typography>
                <TextField name="owner" variant="outlined" label="Document Owner" fullWidth value={recordData.owner} onChange={(e) => setRecordData({...recordData, owner: e.target.value})}/>
                <TextField name="period" variant="outlined" label="Filing Period" fullWidth value={recordData.period} onChange={(e) => setRecordData({...recordData, period: e.target.value})}/>
                <TextField name="year" variant="outlined" label="Filing Year" fullWidth value={recordData.year} onChange={(e) => setRecordData({...recordData, year: e.target.value})}/>
                <TextField name="office" variant="outlined" label="Office Sought" fullWidth value={recordData.office} onChange={(e) => setRecordData({...recordData, office: e.target.value})}/>
                <TextField name="municipality" variant="outlined" label="Municipality" fullWidth value={recordData.municipality} onChange={(e) => setRecordData({...recordData, municipality: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple = {false} onDone ={({base64}) => setRecordData({...recordData, file: base64})}></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonClear} variant="contained" size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;