import { ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import {theme} from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header, Homepage, Login, Logout, Register } from './components';
const App = () => {


  return (
    <div className="App">
       <ThemeProvider theme={theme}>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout />}/>
    </Routes>
    <Footer/>
    </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
