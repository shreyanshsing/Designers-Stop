import React from "react";
import {Container, Grid,makeStyles,Typography} from "@material-ui/core";
import img2 from "../Card/IMG/Card2.png";
import img3 from "../Card/IMG/Card3.png";
import {Carousel} from "react-bootstrap";

const styles = makeStyles(theme=>({
    root:{
        padding:'0px',
        paddingTop:'16px'
    },
    window:{
        width:'100%',
        height:'100%',
        padding:'2%',
        border:'2px solid grey',
        borderRadius:'10px'
    }
}))

const ItemInfo = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4} className={classes.window}>
                <Grid item sm={12}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h6" gutterBottom color="textPrimary" style={{padding:'2%'}}>Crop Sythel <small>by</small> Elly Abhsak</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ItemInfo;