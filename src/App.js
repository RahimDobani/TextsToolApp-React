import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setInterval(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar title="Texts Tool"/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/"element={<TextBox heading="Texts Tool - Word counter, Character counter, Sentence counter and Upper/Lower case conveter" showAlert={showAlert}/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
