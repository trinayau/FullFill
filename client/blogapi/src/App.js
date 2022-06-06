import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { theme } from "./theme";
import {Routes, Route } from "react-router-dom";

import {
  Footer,
  Header,
  Homepage,
  Login,
  Logout,
  Locator,
  Register,
  Donation,
  LoggedIn,
  Communities,
  Profile
} from "./components";
import PrivateRoute from './utils/PrivateRoute'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/*" element={<Homepage />} />
            <Route path="/locator" element={<Locator />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/community" element={<Communities />} />
            {/* Protected route */}
            <Route path="/profile"  element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
          </Routes>
          <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
