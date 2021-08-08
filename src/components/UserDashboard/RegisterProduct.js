import React , {useState} from "react";
import {makeStyles,Typography,Grid,Card,CardHeader,CardContent,TextField, Button} from "@material-ui/core";
import ipfs from "../../service/IPFS/ipfs";
import Toast from "../../custom/toast";
import ImgCard from "../Card/ImgCard";
import {nanoid} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {web3Selector} from "../../service/web3/web3Reducer";
import Product from "../../contracts/Product.json";

const styles = makeStyles(theme=>({
    root:{
        width:'fit-content',
        padding:'1%',
        borderRadius:'10px',
        background : theme.palette.info.main
    },
    content:{
        background : "whitesmoke",
        borderRadius:'10px',
    }
}))

const RegisterProduct = () => {
    const classes = styles();
    const web3 = useSelector(web3Selector);
    const [productName,setProductName] = useState("");
    const [productDesg,setProductDesg] = useState("");
    const [address,setAddress] = useState("");
    const [buffer,setBuffer] = useState("");
    const [imgHash,setImgHash] = useState([]);
    const [toastView,setToastView] = useState(false);
    const [severity,setSeverity] = useState("");
    const [message,setMessage] = useState("");

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
            const data ={ 
                id : nanoid().slice(0,4).toUpperCase(),
                hash : res[0].hash
            }
            setImgHash(prev => [...prev,data]);
        })
        .catch(err=>{
            console.log(err);
            setMessage(err.response.data.message);
            setSeverity("error");
            setToastView(true);
        })
    }

    const handleProductAdd = (e) => {
        e.preventDefault();
        const deployedNetwork = Product.networks[web3.web3.networkId];
        const instance = new web3.web3.web3.eth.Contract(
            Product.abi,
            deployedNetwork && deployedNetwork.address,
        );
        const data = imgHash.map(e => e.hash);
        instance && instance.methods.mintItem(productName,productDesg,data,address).send(
            {
                from:web3.web3.accounts[0],
                gasPrice: 8000000000,
                gas: 4700000,
                gasLimit:60000
            })
            .then(res=>{
                setMessage("Product registered successfully");
                setSeverity("success");
                setToastView(true);
            })
            .catch(err=>{
                setMessage(err);
                setSeverity("error");
                setToastView(true);
            })
            instance && instance.methods.getItems("0x59C81a996C028C8445CAe519D192B309404F0C0B").call()
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <>
        <Card className={classes.root} raised>
            <CardHeader
                title="Register New Product"
                subheader="fill these details"/>
            <CardContent className={classes.content}>
                <form>
                    <Grid container spacing={3}>
                        <Grid item sm={4}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="Product Name"
                                value={productName}
                                onChange={e=>setProductName(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="Product Designer"
                                value={productDesg}
                                onChange={e=>setProductDesg(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="your crypto address"
                                value={address}
                                onChange={e=>setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={12} style={{display:'flex',alignItems:'center'}}>
                            <Typography variant="body1" color="textSecondary" gutterBottom>Upload Images : </Typography>
                            <TextField
                                type="file"
                                onChange={handleImg}
                                variant="outlined"
                                margin="dense"
                            />
                            <Button type="button" variant="contained" color="primary" onClick={handleImgUpload}>upload</Button>
                        </Grid>
                        <Grid item sm={12}>
                            {
                                imgHash.length > 0 && imgHash.map(e => <ImgCard key={e.id} imgHash={imgHash} setImgHash={setImgHash} src={e}/>)
                            }
                        </Grid>
                        <Grid item sm={12} style={{textAlign:'center'}}>
                            <Button variant="contained" color="primary" type="submit" onClick={handleProductAdd}>Add</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
        {
            toastView ? <Toast open={toastView} setOpen={setToastView} message={message} severity={severity}/> : null
        }
        </>
    )
}

export default RegisterProduct;