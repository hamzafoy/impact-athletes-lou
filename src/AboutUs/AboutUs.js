import './AboutUs.css';
import rsantiago from '../assets/rs_headshot.jpeg';
import isanchez from '../assets/is_headshot.jpg';
import jreyes from '../assets/jr_headshot.png';
import officephone from '../assets/phone.svg';
import email from '../assets/gmail.svg';



function AboutUs() {
    return (
      <div className="about-us-container">
        
        <section className="about-us">

            <h1 className="about-us__heading">
                About Us
            </h1>

            <p className="about-us__text">
                We provide a full service shop to meet the philanthropic goals of Athletes and 
                Coaches of all levels. We help athletes make an IMPACT in their community by 
                tapping into their natural leadership abilities to serve their communities. 
                Our staff has over 10 years of involvement in athletics and the non-profit world. 
                Whether you want to have a single day event or a legacy program, our staff can help 
                you build your dreams of IMPACT.
            </p>

        </section>

        <section className="staff-container">

            <aside className="staff-card">

                <figure className="staff-card-picframe">

                    <img className="staff-card__img" alt="Ricky Santiago's headshot" src={rsantiago}/>

                    <figcaption className="staff-card__piclabel">

                        Ricky Santiago <br/> CEO

                        <aside className="staff-icons">

                            <a 
                            href="tel:+15023787805" 
                            target="_blank"
                            rel="noreferrer"
                            >
                            
                                <img 
                                className="nav-icons" 
                                alt="Phone Icon" 
                                src={officephone} 
                                />

                            </a>

                            <a 
                            href="mailto:Ricky@impactathletes.net" 
                            target="_blank"
                            rel="noreferrer"
                            >

                                <img 
                                className="nav-icons" 
                                alt="Email Icon" 
                                src={email} 
                                />

                            </a>

                        </aside>

                    </figcaption>

                </figure>

                <p className="staff-card__text">
                    Our CEO and Founder Ricky Santiago grew up in a very Sports
                    Oriented family. Originally from Ponce, Puerto Rico, a town that takes
                    sports very seriously that&#39;s the birth place of World Class athletes, by
                    way of Louisville, KY another town that takes sports very serious, its
                    was inevitable to be influenced by sports. Having played high school
                    sport and coaching for HS sports for more than 6 years, Ricky has a
                    depth of understanding about the mindset of Athletes. Ricky has
                    served on multiple non-profit boards in the city of Louisville. Ricky
                    also has a Master’s in Organizational Leadership from Indiana Tech
                    University.
                </p>

            </aside>

            <aside className="staff-card">

                <figure className="staff-card-picframe">

                    <img className="staff-card__img" alt="Ricky Santiago's headshot" src={isanchez}/>

                    <figcaption className="staff-card__piclabel">

                        Isai Sanchez <br/> Director of Athlete Outreach

                        <aside className="staff-icons">

                            <a 
                            href="tel:+15023787805" 
                            target="_blank"
                            rel="noreferrer"
                            >
                            
                                <img 
                                className="nav-icons" 
                                alt="Phone Icon" 
                                src={officephone} 
                                />

                            </a>

                            <a 
                            href="mailto:Ricky@impactathletes.net" 
                            target="_blank"
                            rel="noreferrer"
                            >

                                <img 
                                className="nav-icons" 
                                alt="Email Icon" 
                                src={email} 
                                />

                            </a>

                        </aside>

                    </figcaption>

                </figure>

                <p className="staff-card__text">
                    Isai “Izzy” Sanchez was born in Ciudad Cordoba, Veracruz, Mexico. 
                    In his home town, his father, Isai Sanchez Sr., played for the 
                    professional division II soccer team Los Tiburones Rojos de Veracruz. 
                    Izzy’s grandfather, Luis Miguel Sanchez, was also a professional 
                    Luchador and boxer in Mexico. Izzy played High School football at 
                    Louisville Central High School where he primarily played Left Tackle. 
                    Izzy is currently training to be a power lifter and boxer. Izzy has a long 
                    history in the non-profit world and minority outreach. Izzy currently 
                    runs the division of Latino/Spanish Outreach for the first Black Owned 
                    Title company in Louisville.
                </p>

            </aside>

            <aside className="staff-card">

                <figure className="staff-card-picframe">

                    <img className="staff-card__img" alt="Ricky Santiago's headshot" src={jreyes}/>

                    <figcaption className="staff-card__piclabel">

                        Juliana Reyes <br/> Social Media Manager

                        <aside className="staff-icons">

                            <a 
                            href="tel:+15023787805" 
                            target="_blank"
                            rel="noreferrer"
                            >
                            
                                <img 
                                className="nav-icons" 
                                alt="Phone Icon" 
                                src={officephone} 
                                />

                            </a>

                            <a 
                            href="mailto:Ricky@impactathletes.net" 
                            target="_blank"
                            rel="noreferrer"
                            >

                                <img 
                                className="nav-icons" 
                                alt="Email Icon" 
                                src={email} 
                                />

                            </a>

                        </aside>
                        
                    </figcaption>

                </figure>

                <p className="staff-card__text">
                    With a focus on biology for her bachelor’s, Juliana Reyes was born in Ponce, Puerto Rico 
                    with a passion for helping people. During her high school time Juliana tried and succeeded 
                    in a vast majority of school activities with a focus on sports and fitness. Her time as a 
                    high school athlete planted in her the necessary discipline to be a professional, to deal 
                    with losses and to be gracious in victory, something that has helped her in her professional 
                    life. After graduating she focused on sciences and pursued a career in the medical field. 
                    During her studies in Dominican Republic, she participated in various community services 
                    helping the less fortunate communities with medical care.
                </p>

            </aside>

        </section>

      </div>
    );
  }


  
  export default AboutUs;