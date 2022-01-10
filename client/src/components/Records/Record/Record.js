import React from 'react';
import {Card, Button, Typography, Link} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteRecord } from '../../../actions/records';
import * as styleConstants from '../../../constants/styleConstants';

const Record = ({record, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `${record.owner}-${record.period}.pdf`;
        link.href = record.file;
        link.click();
      };
    return(
        <Card className={classes.card}>
            <div>
                <Typography variant="h6">{record.owner}</Typography>
                
            </div>
            <div>
                
            </div>
            <div>
                <Typography variant="body2" color="textPrimary">{record.period}</Typography>
                <Typography variant="body2" color="textPrimary">{record.office}</Typography>
                <Typography variant="body2" color="textPrimary" gutterBottom>{record.municipality}</Typography>
                {record.file &&
                        <Link href="#" onClick={onDownload}>Download</Link>
                }
                
            </div>
            <div>
                <Button style={{color:styleConstants.UPSDELL_RED}} size="small" onClick={() => dispatch(deleteRecord(record._id))}>
                    <DeleteIcon></DeleteIcon>
                </Button>
                <Button style={{color:styleConstants.CAROLINA_BLUE, float:"right"}} size="small" onClick={() => setCurrentId(record._id)}>
                    <EditIcon fontSize="medium" />
                </Button>
            </div>
        </Card>
    );
}

export default Record;