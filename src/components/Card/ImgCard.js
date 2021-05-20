import React from "react";
import {Card,CardContent,Badge,IconButton,makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = makeStyles(theme=>({
    container:{
        margin:'2%',
    },
    root:{
        maxWidth:'250px',
        maxHeight:'200px'
    }
}))

const ImgCard = ({imgHash,setImgHash,src}) => {
    const classes = styles();

    const handleDelete = () => {
        setImgHash(imgHash.filter(e => e.id !== src.id))
    }
    return(
        <Badge 
            badgeContent={
                <IconButton onClick={handleDelete}>
                    <DeleteIcon fontSize="large" style={{fill:'red'}}/>
                </IconButton>
                }>
            <Card raised className={classes.container}>
                <CardContent>
                    <img src={`https://ipfs.io/ipfs/${src.hash}`} className={classes.root} alt="Pic" />
                </CardContent>
            </Card>
        </Badge>
    )
}

export default ImgCard;