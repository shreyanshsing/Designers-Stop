import React from "react";
import {AppBar,Toolbar,makeStyles,Grid,Typography,IconButton,Avatar,Button,TextField,InputAdornment} from "@material-ui/core";
import img from "./logo.png";
import SearchIcon from '@material-ui/icons/Search';

const styles = makeStyles(theme=>({
    appbar:{
        margin:'0%',
        padding:'0%',
    },
    toolbar:{
        padding:'1%',
        background:'#333333',
    },
    large:{
        width:theme.spacing(7),
        height:theme.spacing(7),
    },
    medium:{
        width:theme.spacing(5),
        height:theme.spacing(5),
    },
    profile:{
        marginLeft:'auto'
    },
    input:{
        background:"white",
        borderRadius:"30px",
        border:'0px',
        [`& fieldset`]:{
            borderRadius:"30px",
            border:'0px'
        }
    },
}))

const Header = () => {
    const classes = styles();
    return(
        <AppBar elevation={5} color="secondary" position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Grid container spacing={3}>
                    <Grid item sm={1}>
                        <Avatar alt="logo" src={img} className={classes.large}/>
                    </Grid>
                    <Grid item sm={1} style={{paddingTop:"1.5%"}}>
                        <Button variant="text" type="button" color="primary"><Typography variant="body1">Women</Typography></Button>
                    </Grid>
                    <Grid item sm={1} style={{paddingTop:"1.5%"}}>
                        <Button variant="text" type="button" color="primary"><Typography variant="body1">Men</Typography></Button>
                    </Grid>
                    <Grid item sm={1} style={{paddingTop:"1.5%"}}>
                        <Button variant="text" type="button" color="primary"><Typography variant="body1">Kids</Typography></Button>
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            type="text"
                            variant="outlined"
                            placeholder="Search"
                            margin="dense"
                            fullWidth
                            className={classes.input}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <IconButton className={classes.profile}>
                    <Avatar className={classes.medium} alt="P"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;