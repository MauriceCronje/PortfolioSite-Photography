import React, { useEffect } from "react";
import "./app.scss";

import "./app.css";

import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/gallery/Gallery";

import Login from "./components/Login/Login";

import { loadUser } from "./Redux/Actions/userActions";
import store from "./store";

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
