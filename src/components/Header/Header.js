import React,{useState} from "react";
import { AppBar,Toolbar,Typography,makeStyles,Button,Box } from "@material-ui/core";
import Signin from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";

const style = makeStyles((theme)=>({
    root:{
        color:'rgba(255,255,255,0.8)',
        background:'linear-gradient(to right,rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
        padding:'0.7rem'
    },
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    btn:{
        fontWeight:700
    }
}));

const Header = () => {
    const classes = style();
    const [openSignup,setOpenSignup] = useState(false);
    const [openLogin,setOpenLogin] = useState(false);
    return(
        <>
            <AppBar elevation={3} className={classes.root} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" gutterBottom>Designer's Stop</Typography>
                    <Box>
                        <Button variant="text" className={classes.btn} type="button" color="secondary" size="large" >About</Button>
                        <Button variant="text" className={classes.btn} type="button" color="secondary" size="large" >Blogs</Button>
                        <Button variant="text" className={classes.btn} type="button" color="secondary" size="large" onClick={()=>setOpenLogin(true)} >Signin</Button>
                        <Button variant="text" className={classes.btn} type="button" color="secondary" size="large" onClick={()=>setOpenSignup(true)}>Signup</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                openSignup ? <Signup open={openSignup} setOpen={setOpenSignup}/> : null
            }
            {
                openLogin ? <Signin open={openLogin} setOpen={setOpenLogin}/> : null
            }
        </>
    )
}

export default Header;