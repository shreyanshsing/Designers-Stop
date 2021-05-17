import React,{useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import getWeb3 from "./getWeb3";
import {setWeb3} from "./service/web3/web3Reducer";
import {useDispatch} from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import LiveAuction from "./components/Dashboard/Auction/LIveAuction";

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
    async function load(){
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        dispatch(setWeb3(
          {
            web3 : web3,
            accounts:accounts,
            networkId : networkId
          }
        ));
    } 
    load();
},[dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/auction/:id" component={LiveAuction}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
