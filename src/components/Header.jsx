import "../assets/css/header.css";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled-components for the theme toggle button
const ToggleContainer = styled.div`
  width: 2.5rem;
  height: 1rem;
  border-radius: 50px;
  background: ${({ darkMode }) => (darkMode ? "#FAFAFA" : "#1E1E2F")};
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  justify-content: ${({ darkMode }) => (darkMode ? "flex-end" : "flex-start")};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease-in-out;
`;

const ToggleCircle = styled(motion.div)`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: ${({ darkMode }) => (darkMode ? "#f5f6fa" : "#f1c40f")};
  background-image: ${({ darkMode }) =>
    darkMode
      ? "radial-gradient(circle at 8px 8px,#1E1E2F, #1E1E2F)"
      : "radial-gradient(circle at 10px 10px, #FAFAFA, #FAFAFA)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = ({ darkMode }) => {
  return darkMode ? (
    <div style={{ display: "flex", gap: "2px" }}>
    </div>
  ) : (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: "2px",
          width: "6px",
          height: "6px",
          opacity: 0.4,
        }}
      />
    </div>
  );
};

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Optional: auto-close menu when navigating
    }
  };

  return (
    <div className={`headerContainer ${darkMode ? "dark" : "light"}`}>
      {/* Custom Dark Mode Toggle Button */}
        <ToggleContainer onClick={toggleDarkMode} darkMode={darkMode}>
          <ToggleCircle
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            darkMode={darkMode}
          >
            <ToggleIcon darkMode={darkMode} />
          </ToggleCircle>
        </ToggleContainer>
      <div 
        className={`menubarContainer ${menuOpen ? "change" : ""}`} 
        onClick={toggleMenu}
      >
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
      </div>

      {/* Slide-down menu */}
      <div className={`subMenubarContainer ${menuOpen ? "fadeIn" : "fadeOut"} ${darkMode ? "dark" : "light"}`}>
        <button onClick={() => scrollToSection("home")}  className={`button2 ${darkMode ? "dark" : "light"}`}>Home</button>
        <button onClick={() => scrollToSection("about")}  className={`button2 ${darkMode ? "dark" : "light"}`}>About</button>
        <button onClick={() => scrollToSection("skill")}  className={`button2 ${darkMode ? "dark" : "light"}`}>Skills</button>
        <button onClick={() => scrollToSection("project")}  className={`button2 ${darkMode ? "dark" : "light"}`}>Project</button>
        <button onClick={() => scrollToSection("contact")}  className={`button2 ${darkMode ? "dark" : "light"}`}>Contact</button>
      </div>
    </div>
  );
}

export default Header;
