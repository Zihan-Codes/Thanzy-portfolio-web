import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import AllProjects from "./components/Projects/AllProjects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Header from "./components/Header";
import MobileFooter from "./components/Home/MobileFooter";
import FixedSocialButtons from "./components/Home/FixedSocialButtons";
import AllServices from "./components/Service/AllServices";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar /> */}
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <FixedSocialButtons />
        <Footer />
        <MobileFooter />
      </div>
    </Router>
  );
}

export default App;
