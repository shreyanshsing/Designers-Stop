import React , {useState} from "react";
import {makeStyles,Typography,Dialog,DialogTitle,DialogContent,Button,Grid,FormControl,FormControlLabel,RadioGroup,FormLabel} from "@material-ui/core";
import CustomTextField from "../../../custom/textField";
import Toast from "../../../custom/toast";
import CustomRadio from "../../../custom/radio";
import Registration from "../../../contracts/Registration.json";
import {web3Selector} from "../../../service/web3/web3Reducer";
import {useSelector} from "react-redux";
import ipfs from "../../../service/IPFS/ipfs";

const style = makeStyles((theme)=>({
    paper:{
        width:'100%',
        height:'auto',
        padding:'3%',
        overflowY:'hidden',
        borderRadius:'20px',
    },
    form:{
        overflow:'hidden'
    }
}))

const Signup = ({open,setOpen}) => {
    const classes = style();
    const config = useSelector(web3Selector);
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [userType,setUserType] = useState("");
    const [toastView,setToastView] = useState(false);
    const [severity,setSeverity] = useState("");
    const [message,setMessage] = useState("");
    const [buffer,setBuffer] = useState("");
    const [imgHash,setImgHash] = useState("");

    const handleRadioValue = (e) => {
        const curr_value = e.target.value;
        setUserType(curr_value);

    }

    const handleImg = (event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => convertToBuffer(reader)    
      };
    const convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const new_buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        setBuffer(new_buffer);
    };

    const handleImgUpload = async(e) => {
        e.preventDefault();
        await ipfs.add(buffer)
        .then(res=> {
            setMessage("Image uploaded successfully");
            setSeverity("success");
            setToastView(true);
            setImgHash(res[0].hash);
        })
        .catch(err=>{
            console.log(err);
            setMessage(err.response.data.message);
            setSeverity("error");
            setToastView(true);
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const deployedNetwork = Registration.networks[config.web3.networkId];
        const instance = new config.web3.web3.eth.Contract(
            Registration.abi,
            deployedNetwork && deployedNetwork.address,
        );
        instance && instance.methods.register(address,name,userType,imgHash).send(
            {
                from:config.web3.accounts[0],
                gasPrice: 8000000000,
                gas: 4700000,
                gasLimit:60000
            })
        .then(res=>{
            setMessage("Registration successful , login to continue");
            setSeverity("success");
            setToastView(true);
        })
        .catch(err=>{
            setMessage(err.message);
            setSeverity("error");
            setToastView(true);
        })
    }
    return(
        <>
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            classes={{paper:classes.paper}}>
            <DialogTitle disableTypography={true}>
                <Typography variant="h5" gutterBottom>Enter Details</Typography>
            </DialogTitle>
            <DialogContent className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <CustomTextField type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField type="text" value={address} onChange={(e)=>setAddress(e.target.value)} error={address.length<32 && address.length>0?true:false} variant="outlined" margin="dense" label="Crypto Address" fullWidth required/>
                        </Grid>
                        <Grid item sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Select user type - </FormLabel>
                            <RadioGroup value={userType} onChange={handleRadioValue}>
                                <FormControlLabel value="designer" control={<CustomRadio />} label="Designer" />
                                <FormControlLabel value="buyer" control={<CustomRadio />} label="Buyer" />
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="body1" color="textPrimary" gutterBottom>Upload Profile - </Typography>
                            <CustomTextField type="file" onChange={(e)=>handleImg(e)} variant="outlined" margin="dense" fullWidth required/>
                            <Button type="button" variant="contained" color="primary" onClick={handleImgUpload}>Upload</Button>
                        </Grid>
                        <Grid item sm={12} style={{textAlign:'center'}}>
                            <Button type="reset" variant="contained" color="primary">Reset</Button>&nbsp; / &nbsp;
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            {
                toastView ? <Toast open={toastView} setOpen={setToastView} message={message} severity={severity}/> : null
            }
        </Dialog>
        </>
    )
}
export default Signup;