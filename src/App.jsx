import './App.css'
import Header from "./components/Header"
import Hero from "./components/hero"
import About from "./components/about"
import Blog from "./components/blog"
import BlogModal from "./components/blogModal"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Contact from "./components/contact"

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1E1E2F" : "#FAFAFA";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className={darkMode ? "app dark" : "app light"}>
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />

              <div id='home'>
                <Hero darkMode={darkMode} />
              </div>

              <div id='about'>
                <About darkMode={darkMode} />
              </div>

              <div id='blog'>
                <Blog darkMode={darkMode} />
              </div>

              <div id='contact'>
                <Contact darkMode={darkMode} />
              </div>
            </div>
          }
        />
        <Route
          path="/blogModal"
          element={
            <div className={darkMode ? "dark" : "light"}>
              <BlogModal darkMode={darkMode} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
