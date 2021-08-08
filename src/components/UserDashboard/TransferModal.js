import React,{useState} from "react";
import {Dialog,DialogContent,Button,DialogTitle, Typography, TextField, Checkbox} from "@material-ui/core";

const TransferModal = ({open,setOpen,handleTransfer,data}) => {
    const [sender,setSender] = useState("");
    const [reciever,setReciever] = useState("");

    return(
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
        >
            <DialogTitle>
                Transfer Token Details
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6" gutterBottom>*Note - This is a one way process, you cannot undone this process.</Typography>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    handleTransfer(sender,reciever,data.key);
                    }}>
                    <TextField variant="outlined" placeholder="Enter Sender Crypto Address" value={sender} onChange={(e)=>setSender(e.target.value)} fullWidth required/>
                    <TextField variant="outlined" placeholder="Enter Reciever's Crypto Address" value={reciever} onChange={(e)=>setReciever(e.target.value)} fullWidth required/>
                    <Typography variant="caption" gutterBottom><Checkbox/>Make sure you are reciever's address is correct.</Typography>
                    <Button type="reset" variant="text" color="secondary">Reset</Button>
                    <Button type="submit" variant="contained" color="primary">Transfer</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default TransferModal;