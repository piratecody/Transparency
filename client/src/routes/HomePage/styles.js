import {makeStyles} from "@mui/styles";

import headerImage from '../../assets/images/headerImage.jpg';
import * as styleConstants from '../../constants/styleConstants';

export default makeStyles((theme) => ({
    heroImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",

    },

    heroText: {
        textAlign: "center",
        margin: "auto",
        color: "white",
    },

    textContainer: {
        padding: "1.5em",
        width: "100%",
        display: "flex",
        height: "65%",
    },

    homeCard:{
        flexGrow: 1,
        marginRight: "3rem",
        backgroundColor: styleConstants.POWDER_BLUE,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },

    cardRow: {
        display: "flex",
        marginBottom: "2rem",
    }
      
}));