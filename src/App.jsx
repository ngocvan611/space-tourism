import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import './App.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from "./layouts/Headers";

function App() {
  return (
    <BrowserRouter>
      <Headers/>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
