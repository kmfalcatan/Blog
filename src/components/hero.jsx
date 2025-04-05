import "../assets/css/hero.css";
import Background from "../assets/img/Desktop - 49.png";
import { FaArrowRight } from "react-icons/fa";

function Hero({ darkMode }) {
  return (
    <div className={`heroContainer ${darkMode ? "dark" : "light"}`}>
      <div className="subHeroContainer">
        <p className="introduction">Welcome to My Creative Corner!</p>
        <p className="experience">Embark on a journey of exploration, learning, and endless inspiration. Dive into the world of ideas and stories!</p>
      </div>

      <div className="subHeroContainer">
        <div className="boxContainer">
          <div className="subBoxContainer">
            <p>Tour Experience</p>
          </div>
          
          <p className="highlights">Our Educational Tour Highlights</p>

          <p className="journey">An unforgettable journey filled with learning, fun, and new experiences worth sharing.</p>
        
          <div className="readMoreContainer">
            <button className="readMoreButton">Read more <FaArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
