import './ImpactProcess.css';
import React from 'react';
import coach from '../assets/coach-img.svg';



class ImpactProcess extends React.Component {

    render() {

        return(
            <div className="impact-process-container">
                
                <section className="impact-process__description">

                    <h1>
                        The IMPACT Process
                    </h1>

                    <p>
                    We have devised the project management 
                    process to fit Athletes and Coaches.
                    </p>

                    <ul className="impact-process__list">

                        <li>
                            <strong>Game Prep:</strong> This is where were capture the 
                            vision of our Athletes in order to create a plan of action. 
                        </li>

                        <li>
                            <strong>Scouting Report:</strong> Our staff will create a menu 
                            of options for the athlete to chose from as far as their project goes. 
                        </li>

                        <li>
                            <strong>Game Plan:</strong> Once the Athlete has chosen their IMPACT project, 
                            we will devise a Game Plan (Project Charter) where all parties and stake 
                            holders will agree to terms.
                        </li>

                        <li>
                            <strong>Game Day:</strong> Event day or Program Kick off 
                        </li>

                        <li>
                            <strong>Film Study:</strong> We will follow up with the organizations IMPACTed 
                            to see what can be improved upon, report to the Athlete our findings and see 
                            when can they make an IMPACT again.  
                        </li>

                    </ul>

                </section>

                <aside className="impact-process__img">

                    <img
                    className="coach-img"
                    alt="football coach illustration"
                    src={coach}
                    />

                </aside>

            </div>
        )

    }

}



export default ImpactProcess;