import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography:{
        fontFamily:"'Playfair Display', serif",
        fontWeight:300
    },
    overrides:{
        MuiTypography:{
            body1:{
                fontWeight:300
            }
        }
    }
});

export default theme;