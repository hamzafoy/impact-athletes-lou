import './NavBar.css';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class NavBar extends React.Component {

    render() {

        return(
            <div className="nav-menu">

                <div className="nav-menu__options">

                    <section className="menu-option">
                        <Link className="anchor" to="/">
                            Home
                        </Link>
                    </section>

                    <section className="menu-option">
                        <Link className="anchor" to="/services">
                            Services
                        </Link>
                    </section>

                    <section className="menu-option">
                        <Link className="anchor" to="/impact">
                            IMPACT Process
                        </Link>
                    </section>

                </div>

                <div className="nav-menu__icons">
                    Test
                </div>
                
            </div>
        )

    }

}



export default withRouter(NavBar);