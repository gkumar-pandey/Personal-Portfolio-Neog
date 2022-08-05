import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import Blog from "./Pages/BlogPage/Blog";
import Footer from "./Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [isDarkMode, setisDarkMode] = useState(false);
  const handleDarkMode = () => {
    if (isDarkMode) {
      setisDarkMode(false);
    } else {
      setisDarkMode(true);
    }
  };
  return (
    <div
      style={isDarkMode ? { backgroundColor: "#1B2430", color: "white" } : {}}
    >
      <Router>
        <Navbar
          mode={
            isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )
          }
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/project"
            element={<ProjectPage isDarkMode={isDarkMode} />}
          />
          <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />u
        </Routes>
      </Router>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
