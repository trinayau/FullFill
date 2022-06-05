import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as serviceWorker from './serviceWorker'
import App from './App';
import {Header, Footer, Register} from './components';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />}/>
    </Routes>
      <Footer/>
      </ThemeProvider>
  </React.StrictMode>
  </Router>
);
