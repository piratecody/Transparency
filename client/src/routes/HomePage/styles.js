import {makeStyles} from "@material-ui/core";

import headerImage from '../../assets/images/headerImage.jpg';

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

    },

    heroText: {
        textAlign: "center",
        margin: "auto",
        color: "white",
    },

    textContainer: {
        padding: "1.5em",
        height: "100vh"
    }
      
}));