import { makeStyles } from '@mui/styles';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiAutocomplete-root':{
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: styleConstants.HONEYDEW + " !important",
    height: "25%",
    marginBottom: "1rem",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    margin: "1rem",
    backgroundColor: styleConstants.CELADON_BLUE,
    color: styleConstants.HONEYDEW,
    width: "100%",
  },
  buttonClear: {
    backgroundColor: styleConstants.IMPERIAL_RED + " !important",
    color: styleConstants.HONEYDEW,
    width: "100%",
  },
}));