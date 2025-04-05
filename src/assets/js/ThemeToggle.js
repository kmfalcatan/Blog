import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleContainer = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 50px;
  background: ${({ darkMode }) => (darkMode ? "#2c3e50" : "#87CEFA")};
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  justify-content: ${({ darkMode }) => (darkMode ? "flex-end" : "flex-start")};
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  transition: background 0.3s ease-in-out;
`;

const ToggleCircle = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ darkMode }) => (darkMode ? "#f5f6fa" : "#f1c40f")};
  background-image: ${({ darkMode }) =>
    darkMode
      ? "radial-gradient(circle at 8px 8px, #fff, #ccc)"
      : "radial-gradient(circle at 10px 10px, #f1c40f, #f39c12)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stars = styled.div`
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  margin: 0 1px;
`;

const ToggleIcon = ({ darkMode }) => {
  return darkMode ? (
    <div style={{ display: "flex", gap: "2px" }}>
      <Stars />
      <Stars />
      <Stars />
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

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <ToggleContainer onClick={toggleDarkMode} darkMode={darkMode}>
      <ToggleCircle
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        darkMode={darkMode}
      >
        <ToggleIcon darkMode={darkMode} />
      </ToggleCircle>
    </ToggleContainer>
  );
};

export default ThemeToggle;
