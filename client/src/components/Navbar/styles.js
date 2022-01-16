import { makeStyles } from '@material-ui/core/styles';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles({
  appBar: {
    padding: '1em',
    backgroundColor: styleConstants.CAROLINA_BLUE,
  },
  navLink:{
    textDecoration: "none",
    display: "flex",
  },
  logo: {
    display: "flex",
    flexGrow: 1,
    fontWeight: "bolder",
  },
});