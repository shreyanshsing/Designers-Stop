import React from "react";
import {Container,Grid,makeStyles,Typography,IconButton,TextField, Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = makeStyles(theme=>({
    root:{
        padding:'5%',
        border:'2px solid grey',
        borderRadius:'10px'
    },
}))


const BidArea = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h5" color="textSecondary" gutterBottom>Bid Dashboard</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body2" gutterBottom color="textSecondary">Your slot : 34</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body2" gutterBottom color="textSecondary">Highest Bider  : 4</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="body2" gutterBottom color="textSecondary">Highest Bid  : $ 500</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>Raise bid</Typography>
                </Grid>
                <Grid item sm={2}>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </Grid>
                <Grid item sm={4}>
                    <TextField
                        type="number"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                    />
                </Grid>
                <Grid item sm={2}>
                    <IconButton>
                        <RemoveIcon/>
                    </IconButton>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Button variant="contained" color="primary">Raise</Button>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        <Button variant="contained" color="primary">Quit</Button>
                        &nbsp; / &nbsp;
                        <Button variant="contained" color="primary">Watch</Button>
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        *Notes - <br/>
                              1. After Quit this window will be closed for you.<br/>
                              2. After Watch you can not raise your bid , just can only view auction.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BidArea;