import "../assets/css/header.css";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Styled-components for the theme toggle button
const ToggleContainer = styled.div`
  width: 2.5rem;
  height: 1rem;
  margin-right: 0.5rem;
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
    <div style={{ display: "flex", gap: "2px" }}></div>
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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const scrollToSection = (id) => {
    setMenuOpen(false); // close the menu first
    setTimeout(() => {
      const section = document.getElementById(id.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 600); // wait for animation to finish
  };

  return (
    <div className={`headerContainer ${darkMode ? "dark" : "light"}`}>
      <div
        className={`menubarContainer ${menuOpen ? "change" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
        <div className={`line ${darkMode ? "dark" : "light"}`}></div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{
              clipPath: "circle(0% at 0% 0%)",
              opacity: 0,
            }}
            animate={{
              clipPath: "circle(150% at 0% 0%)", // expands diagonally
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0% at 0% 0%)",
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className={`subMenubarContainer ${darkMode ? "dark" : "light"}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Button container with delayed reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.6, // wait for container to expand
                    staggerChildren: 0.1,
                  },
                },
              }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {["home", "about", "skill", "project", "contact"].map((id) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`button2 ${darkMode ? "dark" : "light"}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark mode toggle */}
      <ToggleContainer
        className="mode"
        onClick={toggleDarkMode}
        darkMode={darkMode}
      >
        <ToggleCircle
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          darkMode={darkMode}
        >
          <ToggleIcon darkMode={darkMode} />
        </ToggleCircle>
      </ToggleContainer>

      <div className="subHeaderContainer">
        <button
          onClick={() => scrollToSection("home")}
          className={`button ${darkMode ? "dark" : "light"}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`button ${darkMode ? "dark" : "light"}`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skill")}
          className={`button ${darkMode ? "dark" : "light"}`}
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("project")}
          className={`button ${darkMode ? "dark" : "light"}`}
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`button ${darkMode ? "dark" : "light"}`}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
