import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App(){

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
