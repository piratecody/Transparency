import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';


import useStyles from './styles';

const Record = ({record, setCurrentId}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <div>
                <Typography variant="h6">{record.owner}</Typography>
                
            </div>
            <div>
                <Button style={{color:"black"}} size="small" onClick={() => setCurrentId(record._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary">{record.period}</Typography>
            </div>
        </Card>
    );
}

export default Record;