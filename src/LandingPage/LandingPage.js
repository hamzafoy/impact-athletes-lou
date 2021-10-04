import './LandingPage.css';
import stockimage from '../assets/stock_foto.png';
import AboutUs from '../AboutUs/AboutUs';



function LandingPage() {
  return (

    <>

      <div className="App">

        <div className="trading-card-container">
        
          <h2 className="mission-text"><span>To capture the natural leadership qualities of athletes for the betterment of their community.</span></h2>

          <img className="stock-image" src={stockimage} alt="Stock foto of a RB trying to juke the defense."/>
          
          <h2 className="vision-text"><span>A community of Athletes that impact their communities with their services.</span></h2>
        
        </div>
        
        <section className="title-and-svg">

          <h2 className="name-text">Impact Athletes</h2>

          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="double-chevrons-down"
          viewBox="0 0 24 24"
          >

            <path d="M7 13L12 18 17 13"></path>
            <path d="M7 6L12 11 17 6"></path>

          </svg>

        </section>

        

      </div>

      <AboutUs/>

    </>
  );
}



export default LandingPage;