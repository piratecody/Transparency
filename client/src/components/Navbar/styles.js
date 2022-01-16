import { makeStyles } from '@material-ui/core/styles';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles({
  appBar: {
    padding: '1em',
    backgroundColor: styleConstants.PRUSSIAN_BLUE,
  },
  navLink:{
    textDecoration: "none",
    display: "flex",
    '& .MuiButton-label': {
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