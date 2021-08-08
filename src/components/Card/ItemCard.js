import React,{useState} from "react";
import {makeStyles,Card,CardHeader,CardContent,CardActions, Button, Typography} from "@material-ui/core";
import {Carousel} from "react-bootstrap";
import TransferModal from "../UserDashboard/TransferModal";

const styles = makeStyles(theme=>({
    root:{
        width:'fit-content',
        padding:'1%',
        background:'lightgrey',
        margin:'1%'
    },
}))

const ItemCard = (props) => {
    const classes = styles();
    const [openTranfer,setOpenTransfer] = useState(false);
    const item = props.data;
        if(parseInt(item.isBurned) === 1){
            return null;
        }
        else{
            return(
                <>
                <Card className={classes.root} raised>
                    <CardHeader
                        title={item.name}
                        subheader={item.designer}/>
                    <CardContent style={{margin:'auto'}}>
                        <Carousel style={{width:'100%',margin:'auto'}}>
                            {
                                item.imgHash.length > 0 && item.imgHash.map(e => 
                                    <Carousel.Item key={e}>
                                        <img
                                            style={{maxWidth:'200px',maxHeight:'200px'}}
                                            src={`https://ipfs.io/ipfs/${e}`}
                                            alt="slide"
                                        />
                                    </Carousel.Item>)
                            }
                        </Carousel>
                        {
                            item.isTransfered === "1" ? <Typography variant="caption" gutterBottom>This token was transferred, you are no longer owner of this token.</Typography> : null
                        }
                    </CardContent>
                    <CardActions>
                        <Button type="button" variant="text" disabled={item.isTransfered === "1" ? true : false} style={{color:'red',fontWeight:'bold'}} onClick={()=> props.handleBurn(item.key)} size="small">Burn</Button>
                        <Button type="button" variant="text" disabled={item.isTransfered === "1" ? true : false} style={{color:'green',fontWeight:'bold'}} onClick={()=>setOpenTransfer(true)} size="small">Transfer</Button>
                        <Button type="button" variant="contained" disabled={item.isTransfered === "1" ? true : false} color="secondary" size="small"> Auction</Button>
                    </CardActions>
                </Card>
                {
                    openTranfer ? <TransferModal open={openTranfer} data={item} setOpen={setOpenTransfer} handleTransfer={props.handleTransfer} /> : null
                }
                </>
            )
        }
}

export default ItemCard;