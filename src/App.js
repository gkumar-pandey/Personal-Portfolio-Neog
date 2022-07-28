import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import Blog from "./Pages/BlogPage/Blog";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/blog" element={<Blog />} />u
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
