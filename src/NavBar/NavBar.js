import './NavBar.css';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import email from '../assets/gmail.svg';
import twitter from '../assets/twitter.svg';
import officephone from '../assets/phone.svg';



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

                    <a href="tel:+15023787805" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Phone Icon" 
                        src={officephone} 
                        height="22px" 
                        width="22px"
                        />
                    </a>

                    <a href="mailto:Ricky@impactathletes.net" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Email Icon" 
                        src={email} 
                        height="22px" 
                        width="22px"
                        />
                    </a>
                    
                    <a href="https://www.facebook.com/Impact-Athletes-228267015778457" 
                    rel="noreferrer" 
                    target="_blank"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Facebook Icon" 
                        src={facebook} 
                        height="22px" 
                        width="22px"
                        />
                    </a>

                    <a href="https://www.instagram.com/impact.athletes/" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Instagram Icon" 
                        src={instagram} 
                        height="22px" 
                        width="22px"
                        />
                    </a>

                    <a href="https://twitter.com/ImpactAthletes" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img 
                        className="nav-icons" 
                        alt="Twitter Icon" 
                        src={twitter} 
                        height="22px" 
                        width="22px"
                        />
                    </a>

                    <p className="nav-menu__label">
                        Ricky Santiago, CEO &amp; Founder
                    </p>

                </div>
                
            </div>
        )

    }

}



export default withRouter(NavBar);