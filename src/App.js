import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from './NavBar/NavBar';
import Services from "./Services/Services";



function App() {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={ () => <LandingPage/>} />
                    <Route path="/services" exact component={ () => <Services/>} />
                </Switch>
                <NavBar />
            </Router>
        </div>
    )
}



export default App;