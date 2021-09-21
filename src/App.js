import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import ImpactProcess from './ImpactProcess/ImpactProcess';
import Works from './Works/Works';



function App() {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={ () => <LandingPage/>} />
                    <Route path="/services" exact component={ () => <Services/>} />
                    <Route path="/impact" exact component={ () => <ImpactProcess/>} />
                    <Route path="/previous-work" exact component={ () => <Works/>} />
                </Switch>
                <NavBar />
            </Router>
        </div>
    )
}



export default App;