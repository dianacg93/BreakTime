import logo from "../images/logo/logo.png";
import './css/HomePage.css'
import wakeup from '../images/icons/home-icon1.png'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome!</h1>
      <div className="text-structure">
        <h3 className="working-text">
          Working from home can be extremely tiring . . .
        </h3>
        <div className="wake-up">
          <h3>Here's your wakeup call!</h3>
          <img src={wakeup} alt="sleeping girl" />
        </div>
        <div className="enjoy-fun-back">
        <div className="enjoy-fun">
          <h2>ENJOY LOAD OF FUN WHILE ON YOUR...</h2>
          <img className="app-logo" src={logo} alt="page-logo" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
