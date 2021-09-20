import './NavBar.css';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg';



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
                    
                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    rel="noreferrer" 
                    target="_blank"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="24px" 
                        width="24px"
                        />
                    </a>

                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="24px" 
                        width="24px"
                        />
                    </a>

                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="24px" 
                        width="24px"
                        />
                    </a>

                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="24px" 
                        width="24px"
                        />
                    </a>

                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="24px" 
                        width="24px"
                        />
                    </a>

                </div>
                
            </div>
        )

    }

}



export default withRouter(NavBar);