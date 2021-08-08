import React from "react";
import {Container,makeStyles,Grid,Typography,IconButton} from "@material-ui/core";
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const styles = makeStyles((theme)=>({
    root:{
        padding:'2%',
        background:'linear-gradient(to right,rgba(0,0,0,0.1),rgba(0,0,0,0.1))'
    }
}))

const Footer = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={1}>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom><BusinessIcon fontSize="large"/> : 29 P BLOCK YASHODA NAGAR, KANPUR , UTTAR PRADESH. (<RoomIcon/><a href="#home">locate us on map</a>)</Typography>
                    <Typography variant="subtitle1" gutterBottom>Services only availble in India.</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom><CallIcon fontSize="large"/> : +91-63-888-37120</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom>
                        Our Social Media : 
                        <IconButton>
                            <TwitterIcon fontSize="large" style={{fill:'#00ccff'}}/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon fontSize="large" style={{fill:'#ff0066'}}/>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon fontSize="large" style={{fill:'#0000ff'}}/>
                        </IconButton>
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom>
                        Write us at : operations@designersstop.com
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;