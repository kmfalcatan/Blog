import "../assets/css/blogModal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Back from "../assets/img/back.svg";
import Next from "../assets/img/next.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function BlogModal({ darkMode }) {
  const navigate = useNavigate();
  const { state } = useLocation(); // Get data passed from Blog page

  const images = state?.images || [state?.image]; // Support for single or multiple images
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentBlogIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`blogModalPage ${darkMode ? "dark" : "light"}`} data-aos="fade">
      <div className="modalHeaderContainer">
        <img
          className={`back ${darkMode ? "dark" : "light"}`}
          src={Back}
          alt="Back"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="blogImageContainer">
        <img className="blogImage" src={images[0]} alt="Main Blog" />
      </div>

      <div className="dayContainer">
        <div className={`subDayContainer ${darkMode ? "dark" : "light"}`}>
          <p className={`dayText ${darkMode ? "dark" : "light"}`}>{state.day}</p>
          <p className={`agenda ${darkMode ? "dark" : "light"}`}>{state.agenda}</p>
          <p className={`dateTour ${darkMode ? "dark" : "light"}`}>{state.date}</p>
        </div>
      </div>

      <div className="paragraphContainer">
        <div className="introductionContainer" data-aos="fade-up" data-aos-delay="500">
          <p className={`intro ${darkMode ? "dark" : "light"}`}>Introduction</p>
          <p className={`fontStyle ${darkMode ? "dark" : "light"}`}>{state.introduction}</p>
        </div>

        <div className="blogImageContainer1" data-aos="fade-up" data-aos-delay="700">
          <div className={`subBlogImgContainer ${darkMode ? "dark" : "light"}`}>
            <img
              key={currentBlogIndex}
              className="blogImg fade"
              src={images[currentBlogIndex]}
              alt={`Blog ${currentBlogIndex + 1}`}
            />

            <div className="nextContainer">
              <div className="subNextContainer" onClick={handlePrev}>
                <img className="arrowBack" src={Back} alt="Previous" />
              </div>
              <div className="subNextContainer" onClick={handleNext}>
                <img className="arrowBack" src={Next} alt="Next" />
              </div>
            </div>
          </div>
        </div>

        <div className="expirienceContainer" data-aos="fade" data-aos-delay="300">
          <p className={`experience1 ${darkMode ? "dark" : "light"}`}>{state.experience}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
