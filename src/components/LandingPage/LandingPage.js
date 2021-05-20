import React from "react";
import {Container,makeStyles,Typography,Grid,Divider, Button} from "@material-ui/core";
import {Card1,Card2,Card3} from "../Card/Card";
import Footer from "../Footer/Footer";
import Auth from "../Authentication/Auth";

const styles = makeStyles((theme)=>({
    root:{
        width:'100%',
        height:'100%',
        overflow:'scroll',
        overflowWrap:'break-word',
        padding:"3%",
        overflowX:'hidden'
    },
    brand:{
        fontWeight:1000,
        color:'rgba(0,0,0,0.5)',
        paddingLeft:'1%',
        backgroundImage:'linear-gradient(180deg,#FF0018,#FFA52C,#FFFF41,#008018,#0000F9, #86007D)',
        letterSpacing:'5px',
        borderRadius:'20px 20px 400px 20px',
        boxShadow:'10px 10px 15px lightgrey'
    },
    light:{
        marginLeft:'0%',
        margin:'2%',
        padding:'1px'
    }
}))

const LandingPage = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={6}>
                    <Typography variant="h1" className={classes.brand} gutterBottom>dESIGNER's sTOP</Typography>
                    <Divider light classes={{light:classes.light}}/>
                </Grid>
                <Grid item sm={6}>
                    <Auth/>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h3" gutterBottom>
                        What do we offer !
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                        <Grid item sm={4}>
                            <Card1/>
                        </Grid>
                        <Grid item sm={4}>
                            <Card2/>
                        </Grid>
                        <Grid item sm={4}>
                            <Card3/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Button type="button" variant="contained" color="primary">Try for free</Button>
                </Grid>
                <Grid item sm={12}>
                    <Divider light classes={{light:classes.light}}/>
                    <Footer/>
                    <Divider light classes={{light:classes.light}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LandingPage;