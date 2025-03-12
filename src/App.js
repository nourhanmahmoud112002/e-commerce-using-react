import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
     
    </React.Fragment>
  );
}

export default App;
