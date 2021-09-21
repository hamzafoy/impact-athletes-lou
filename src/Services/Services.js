import './Services.css';
import React from 'react';
import basketball from '../assets/basketball-img.svg';



class Services extends React.Component {

    render() {

        return(
            <div className="services-container">

                <aside className="services__img">

                    <img className="ball-img" alt="basketball illustration" src={basketball} />

                </aside>

                <section className="services__description">

                    <h1>
                        Why Our Services?
                    </h1>

                    <p>
                    To make a true impact in our communities we need to combine three
                    things: influence, money, and time. Our staff can help leverage these by
                    taking on the management process.
                    </p>

                    <h1>
                        What are our services?
                    </h1>

                    <ul className="services__list">

                        <li>
                            Program Management
                        </li>

                        <li>
                            Event Management
                        </li>

                        <li>
                            Philanthropic Consulting
                        </li>

                    </ul>

                </section>

            </div>
        )

    }

}



export default Services;