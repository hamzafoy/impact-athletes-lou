import './Works.css';
import React from 'react';
import ramonProject from '../assets/past-projects__1.png';



class Works extends React.Component {

    render() {

        return(
            <div className="works-container">

                <section className="works__testimonies">

                    <h1>
                        Testimonies
                    </h1>

                    <blockquote className="works__quote">
                    
                    <p>
                    Dear Mr. Santiago and Mr. Clemente:
                    We hope that this letter finds you and your loved ones healthy and well.
                    On behalf of our organization, Puerto Rico Rise Up, I wanted to thank you for your
                    recent collaboration with us, as we work for the well-being of the children of Puerto
                    Rico. Our organization wishes to continue and strengthen these types of
                    collaborations with our community. Seeing the faces of joy and hope are what fuels
                    PRRU to continue working.
                    </p>
                    </blockquote>

                </section>

                <section className="works__projects">

                    <h1>
                        Past Projects
                    </h1>

                    <aside className="projects__images">

                        <img 
                        alt="Ramon's Day of Giving Infographic" 
                        src={ramonProject} 
                        className="projects__img" 
                        />

                    </aside>

                </section>

            </div>
        )

    }

}



export default Works;