import React from "react";
import {Container,Grid,makeStyles,Typography} from "@material-ui/core";

const styles = makeStyles(theme=>({
    root:{
        padding:'5%',
        border:'2px solid grey',
        borderRadius:'10px'
    },
    circle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        background:'rgba(0,0,0,0.2)',
        margin:'10px'
    }
}))


const AvtiveParticipants = () => {
    var arr = new Array(45);
    for(var i=1;i<=45;i++){
        arr[i] = i;
    }
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>Active Participants</Typography>
                </Grid>
                {
                    arr.map(e => 
                        <div className={classes.circle}>
                            {e}
                        </div>)
                }
            </Grid>
        </Container>
    )
}

export default AvtiveParticipants;