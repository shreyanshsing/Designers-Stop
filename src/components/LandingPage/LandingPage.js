import React from "react";
import {Container,makeStyles,Typography,Grid} from "@material-ui/core";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {ReactComponent as Svg} from "./svg.svg";
import Img from "./svg.png";

const styles = makeStyles((theme)=>({
    root:{
        width:'100%',
        height:'100%',
        overflow:'auto',
        overflowWrap:'break-word',
        padding:"1.5rem",
    },
    content:{
        marginTop:'3rem',
        fontWeight:500,
        padding:'1rem',
    },
    flex:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))

const LandingPage = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Header/>
                </Grid>
                <Grid item sm={12} className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} className={classes.flex}>
                            <Typography variant="h5" gutterBottom>
                                Welcome to new experience of auctions!
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.flex}>
                            <Svg width={250} height={250} />
                            <Typography variant="h6" gutterBottom>
                                Get amazing deals, like never before. Easy to use platform.
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.flex}>
                            <img width={300} height={300} src={process.env.PUBLIC_URL + "/designer's stop.gif"} alt="gif"/>
                        </Grid>
                        <Grid item sm={4} className={classes.flex}>
                            <img src={Img} alt="dvg" width={100} height={100} />
                            <Typography variant="h6" gutterBottom>
                                No need to pay us, no middleman fees, deal direct with your buyer/ seller
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LandingPage;