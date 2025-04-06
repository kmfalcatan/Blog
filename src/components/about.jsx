import "../assets/css/about.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Km from "../assets/img/KmPicture.svg"

function About({ darkMode }) {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
    
    useEffect(() => {
      AOS.refresh(); // this will re-calculate animations
    }, [darkMode]);
    
  return(
    <div className="aboutContainer">
      <div data-aos="fade" className="subAboutContainer">
        <div className={`pictureBackgroundContainer ${darkMode ? "dark" : "light"}`}>
          <img className="picture" src={Km} alt="" />
        </div>
      </div>

      <div data-aos="fade" data-aos-delay="300" className="subAboutContainer">
        <div className="aboutMeContainer">
          <p className={`aboutMe ${darkMode ? "dark" : "light"}`}>Hi, I’m Khriz Marr L. Falcatan, a 4th-year student at Western Mindanao State University, currently pursuing a Bachelor of Science in Information Technology. I have a strong passion for front-end development, where I focus on creating visually appealing and user-friendly web interfaces. My interests lie in crafting responsive and interactive designs using modern technologies like HTML, CSS, JavaScript, and frameworks such as React. I enjoy solving UI/UX challenges and ensuring that web applications provide a seamless experience across different devices and browsers. As I continue to develop my skills, I am eager to learn more about emerging trends in front-end development and how I can apply them to real-world projects.</p>
        </div>
      </div>
    </div>
  );
}

export default About;