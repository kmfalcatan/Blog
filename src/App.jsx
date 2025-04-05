import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1E1E2F" : "#FAFAFA";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
}

export default App;
