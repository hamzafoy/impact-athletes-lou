import './Works.css';
import React from 'react';
import ramonProject from '../assets/past-projects__1.png';



class Works extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOn: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(prevState => ({
            modalOn: !prevState.modalOn
        }))
    }

    render() {

        return(
            <div className="works-container">

                <div className={this.state.modalOn ? "modal-container-active" : "modal-container-hidden"}>

                </div>

                <section className="works__testimonies">

                    <h1>
                        Testimonies
                    </h1>

                    <blockquote className="works__quote">
                    
                    <p>
                    Dear Mr. Santiago and Mr. Clemente: <br/><br/>

                    We hope that this letter finds you and your loved ones healthy and well.<br/><br/>

                    On behalf of our organization, Puerto Rico Rise Up, I wanted to thank you for your
                    recent collaboration with us, as we work for the well-being of the children of Puerto
                    Rico. Our organization wishes to continue and strengthen these types of
                    collaborations with our community. Seeing the faces of joy and hope are what fuels
                    PRRU to continue working.<br/><br/>

                    Without a doubt, our collaboration with you has been a unique gift to our children.  
                    They greatly enjoyed their movie night and going out to the basketball game. 
                    It  was an amazing evening for everyone. We recognize that these activities are not  
                    always possible for children, yet we succeeded thanks to you.<br/><br/>

                    We truly appreciate you placing your trust in us. We hope this will be the start of 
                    future collaborations, so that together we may continue providing hope for our children 
                    during a time when it is so needed.<br/><br/>

                    Karen Caraballo, Psy.D. ABSNP  
                    Chief Executive Officer 
                    Puerto Rico Rise Up, Inc 

                    </p>
                    </blockquote>

                </section>

                <section className="works__projects">

                    <h1>
                        Past Projects
                    </h1>

                    <aside className="projects__images">

                        <figure className={this.state.modalOn ? "projects__img-modal" : "projects__img"}>

                            <img 
                            alt="Ramon's Day of Giving Infographic"
                            height={this.state.modalOn ? "360px" : "250px"}
                            width={this.state.modalOn ? "360px" : "250px"}
                            src={ramonProject} 
                            onClick={this.handleChange}
                            />
                            
                            <figcaption>
                                Click image to enlarge &amp; click again to shrink.
                            </figcaption>

                        </figure>
                        

                    </aside>

                </section>

            </div>
        )

    }

}



export default Works;