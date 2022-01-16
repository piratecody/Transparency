import {makeStyles} from "@material-ui/core";

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
    },

    homeCard:{
        minWidth: "10%",
        maxWidth: "20%",
        flexGrow: 1,
        marginRight: "1rem",
        backgroundColor: styleConstants.POWDER_BLUE,
    },

    cardRow: {
        display: "flex",
    }
      
}));