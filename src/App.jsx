import React from "react";

import Nav from "./utils/Nav";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import About from "./components/About";

function App() {
  return (
    <>
   <Nav/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/User/:id" element={<UserDetails/>} />
        <Route path="/User" element={<User />} />
        <Route path="/Abuot" element={<About />} />
      </Routes>
    
    </>
  );
}

export default App;
