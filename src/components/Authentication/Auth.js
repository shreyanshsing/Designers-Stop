import React , {useState} from "react";
import {Button, Container,makeStyles,Grid,Typography} from "@material-ui/core";
import Signup from "./Signup/Signup";
import Signin from "./Login/Login";

const styles = makeStyles((theme)=>({
    root:{
        padding:'2%',
    }
}))

const Auth = () => {
    const classes = styles();
    const [openSignup,setOpenSignup] = useState(false);
    const [openLogin,setOpenLogin] = useState(false);

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={1}>
                <Grid item sm={6}></Grid>
                <Grid item sm={2}>
                    <Button variant="text" color="primary" type="button"><Typography variant="h6">Blogs</Typography></Button>
                </Grid>
                <Grid item sm={2}>
                    <Button variant="text" color="primary" type="button" onClick={()=>setOpenLogin(true)}><Typography variant="h6">Sign In</Typography></Button>
                </Grid>
                <Grid item sm={2}>
                    <Button variant="text" color="primary" type="button" onClick={()=>setOpenSignup(true)}><Typography variant="h6">Sign Up</Typography></Button>
                </Grid>
            </Grid>
            {
                openSignup ? <Signup open={openSignup} setOpen={setOpenSignup}/> : null
            }
            {
                openLogin ? <Signin open={openLogin} setOpen={setOpenLogin}/> : null
            }
        </Container>
    )
}

export default Auth;