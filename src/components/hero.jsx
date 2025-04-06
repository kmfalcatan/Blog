import { useEffect } from "react";
import "../assets/css/hero.css";
import Background from "../assets/img/Desktop - 49.png";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero({ darkMode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  
  useEffect(() => {
    AOS.refresh(); // this will re-calculate animations
  }, [darkMode]);
  

  return (
    <div className={`heroContainer ${darkMode ? "dark" : "light"}`}>
      <div className="subHeroContainer">
        <p className={`introduction ${darkMode ? "dark" : "light"}`} data-aos="fade" data-aos-delay="300">Welcome to My Creative Corner!</p>
        <p className={`experience ${darkMode ? "dark" : "light"}`} data-aos="fade" data-aos-delay="500">
          Embark on a journey of exploration, learning, and endless inspiration. Dive into the world of ideas and stories!
        </p>
      </div>

      <div className="subHeroContainer">
        <div data-aos="fade-up" className={`boxContainer ${darkMode ? "dark" : "light"}`}>
          <div className={`subBoxContainer ${darkMode ? "dark" : "light"}`}>
            <p>Tour Experience</p>
          </div>

          <p className={`highlights ${darkMode ? "dark" : "light"}`}>Our Educational Tour Highlights</p>

          <p className={`journey ${darkMode ? "dark" : "light"}`}>
            An unforgettable journey filled with learning, fun, and new experiences worth sharing.
          </p>

          <div className="readMoreContainer">
            <button className={`readMoreButton ${darkMode ? "dark" : "light"}`}>
              Read more <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
