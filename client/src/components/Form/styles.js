import { makeStyles } from '@mui/styles';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: styleConstants.HONEYDEW,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: styleConstants.CELADON_BLUE,
    color: styleConstants.HONEYDEW,
  },
  buttonClear: {
    backgroundColor: styleConstants.IMPERIAL_RED,
    color: styleConstants.HONEYDEW,
  },
}));