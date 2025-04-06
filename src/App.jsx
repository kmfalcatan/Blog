import './App.css'
import Header from "./components/Header"
import Hero from "./components/hero"
import { useState, useEffect } from "react";
import About from "./components/about"

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1E1E2F" : "#FAFAFA";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    
      <div id='home'>
        <Hero darkMode={darkMode} />
      </div>

      <div id='about'>
        <About darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
