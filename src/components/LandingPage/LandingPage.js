import React from "react";
import {Container,makeStyles,Typography,Grid,Divider, Button} from "@material-ui/core";
import {Card1,Card2,Card3} from "../Card/Card";
import Footer from "../Footer/Footer";

const styles = makeStyles((theme)=>({
    root:{
        width:'100%',
        height:'100%',
        overflow:'scroll',
        overflowWrap:'break-word',
        padding:"5%",
        overflowX:'hidden'
    },
    brand:{
        fontWeight:1000,
        color:'#cccccc',
        letterSpacing:'5px'
    },
    light:{
        marginLeft:'0%',
        margin:'2%',
        color:'whitesmoke',
        background:'whitesmoke'
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
                    <Button type="button" variant="contained">Try for free</Button>
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