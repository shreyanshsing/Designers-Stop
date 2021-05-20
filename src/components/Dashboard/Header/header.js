import React ,{useState,useEffect} from "react";
import {AppBar,Toolbar,makeStyles,Grid,IconButton,Avatar,TextField,InputAdornment} from "@material-ui/core";
import img from "./logo.png";
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from "../../Sidebar/Sidebar";
import {selectorUserProfile,setProfile} from "../../../service/userProfile/userProfile.slice";
import {useSelector,useDispatch} from "react-redux";

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
    const [open,setOpen] = useState(false);
    const profile = useSelector(selectorUserProfile);
    const dispatch = useDispatch();

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch(setProfile("https://ipfs.io/ipfs/"+user.profile))
    },[dispatch])
    
    return(
        <>
        <AppBar elevation={5} color="secondary" position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Grid container spacing={3}>
                    <Grid item sm={1}>
                        <Avatar alt="logo" src={img} className={classes.large}/>
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
                <IconButton onClick={()=>setOpen(true)} className={classes.profile}>
                    <Avatar className={classes.medium} src={`${profile.profile}`} alt="P"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        {
            open ? <Sidebar open={open} setOpen={setOpen}/> : null
        }
        </>
    )
}

export default Header;