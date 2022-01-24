import { makeStyles } from '@mui/styles';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles({
  appBar: {
    padding: '1em',
    backgroundColor: styleConstants.PRUSSIAN_BLUE  + " !important",
  },
  navLink:{
    textDecoration: "none",
    display: "flex",
    color: styleConstants.HONEYDEW,
    '& .MuiButton-text': {
      color: styleConstants.HONEYDEW,
    },
    '& :hover':{
      color: styleConstants.IMPERIAL_RED,
    }
  },
  logo: {
    display: "flex",
    flexGrow: 1,
    fontWeight: "bolder",
  },
});