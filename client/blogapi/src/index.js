import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as serviceWorker from './serviceWorker'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
      <Footer/>
  </React.StrictMode>
  </Router>
);
