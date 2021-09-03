import './LandingPage.css';
import stockimage from './assets/stock_football.jpg'



function LandingPage() {
  return (
    <div className="App">
      
      <img className="stock-image" src={stockimage} alt="Stock foto of a RB trying to juke the defense." />

      <h2 className="name-text"><span>Impact Athletes</span></h2>

      <h2 className="mission-text"><span>To capture the natural leadership qualities of athletes for the betterment of their community.</span></h2>

      <h2 className="vision-text"><span>A community of Athletes that impact their communities with their services.</span></h2>

    </div>
  );
}



export default LandingPage;