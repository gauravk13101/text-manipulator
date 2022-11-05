import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // showAlert function to set changes in the setALert state
  const showAlert = (message, type) => {
    // For displaying alert message
    setAlert({
      msg: message,
      type: type
    })
    // To dismiss the alert after 1.5 sec 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* In Version 6 of react router dom Switch has been replaced with Routes
              Route syntax :-
                <Routes>
                  <Route path="/about" element={<element name />} />
                </Routes>
          */}
          <Routes>
            {/* using exact keyword to avoid partial matching done by react */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/home" element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove symbols" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;