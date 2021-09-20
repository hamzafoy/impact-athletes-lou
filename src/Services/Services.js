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

                    <p>
                    To make a true impact in our communities we need to combine three
                    things: influence, money, and time. Our staff can help leverage these by
                    taking on the management process.
                    </p>

                </section>

            </div>
        )

    }

}



export default Services;