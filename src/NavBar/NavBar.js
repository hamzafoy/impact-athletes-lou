import './NavBar.css';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class NavBar extends React.Component {

    render() {

        return(
            <div className="nav-menu">

                <div className="nav-menu__options">
                    <section className="menu-option">
                        <Link to="/">
                            Home
                        </Link>
                    </section>
                </div>

                <div className="nav-menu__options">
                    <section className="menu-option">
                        <Link to="/services">
                            Services
                        </Link>
                    </section>
                </div>
                
            </div>
        )

    }

}



export default withRouter(NavBar);