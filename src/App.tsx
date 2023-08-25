import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination/Destination";
import { Crew } from "./components/Crew/Crew";
import { Vehicle } from "./components/Technology/Vehicle";
import { Spaceport } from "./components/Technology/Spaceport"
import { Capsule } from "./components/Technology/Capsule";
import { Europe } from "./components/Destination/Europe";
import { Mars } from "./components/Destination/Mars";
import { Titan } from "./components/Destination/Titan";
import { Commander } from "./components/Crew/Commander";
import { Specialist } from "./components/Crew/Specialist";
import { Pilot } from "./components/Crew/Pilot";

function App() {

  return (
    <React.Fragment>
      <header className="header">
        <div className="logo">
          <NavLink to="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
          </NavLink>
        </div>
        <Navbar />
      </header>
      <div>
        <Routes >
          {/* IDLE URLS */}
          <Route path="*" element={<Navigate to="/home" />} />
          {/* HOME */}
          <Route path="/home" element={<Home />} />
          {/* CREW */}
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/engineer" element={<Crew />} />
          <Route path="/crew/commander" element={<Commander />} />
          <Route path="/crew/specialist" element={<Specialist />} />
          <Route path="/crew/pilot" element={<Pilot />} />
          {/* TECHNOLOGY */}
          <Route path="/technology" element={<Vehicle />} />
          <Route path="/technology/vehicle" element={<Vehicle />} />
          <Route path="/technology/spaceport" element={<Spaceport />} />
          <Route path="/technology/capsule" element={<Capsule />} />
          {/* DESTINATION */}
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/moon" element={<Destination />} />
          <Route path="/destination/europe" element={<Europe />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/titan" element={<Titan />} />
        </Routes>
      </div>


    </React.Fragment >
  )
}

export default App
