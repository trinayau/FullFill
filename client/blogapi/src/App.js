// import { ThemeProvider } from "@mui/material";
import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as Layout } from "./layouts";
import { Login, Logout } from "./components";

import {
  CommunityPage,
  DonationPage,
  IndexPage,
  LocatorPage,
  RecipePage,
  RegisterPage,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/locator" element={<LocatorPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
