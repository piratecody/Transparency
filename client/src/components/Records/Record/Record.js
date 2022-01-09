import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';


import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deleteRecord } from '../../../actions/records';

const Record = ({record, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <div>
                <Typography variant="h6">{record.owner}</Typography>
                
            </div>
            <div>
                <Button style={{color:"black"}} size="small" onClick={() => setCurrentId(record._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary">{record.period}</Typography>
            </div>
            <div>
                <Button style={{color:"red"}} size="small" onClick={() => dispatch(deleteRecord(record._id))}>
                    <DeleteIcon></DeleteIcon>
                </Button>
            </div>
        </Card>
    );
}

export default Record;