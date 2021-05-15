import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#cccccc'
        },
        secondary:{
            main:'#ffffff'
        }
    },
    typography:{
        fontFamily:"'Playfair Display', serif",
        fontWeight:300
    },
    overrides:{
        MuiTypography:{
            body1:{
                fontWeight:200
            }
        }
    }
});

export default theme;