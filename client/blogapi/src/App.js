// import { ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Community,
  Communities,
  Profile,
  NotFoundPage,
  Newsletter,
} from "./components";

import PrivateRoute from "./utils/PrivateRoute";
import "./styles/index.css";
import { default as Layout } from "./layouts";
import { Login, Logout } from "./components";

import {
  CommunityPage,
  DonationPage,
  IndexPage,
  LocatorPage,
  RecipePage,
  RegisterPage,
  PublicProfilePage,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/locator" element={<LocatorPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/communities">
            <Route path="/communities" element={<Communities />} />
            <Route
              path=":id"
              element={
                <PrivateRoute>
                  <Community />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/newsletter" element={<Newsletter />} />

          {/* Protected route */}
          <Route path="/profile">
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/profile/:username" element={<PublicProfilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
