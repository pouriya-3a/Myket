import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BottomNav from "./Components/BottomNav";
import Apps from "./Pages/Apps";
import NotFound from "./Pages/NotFound";
import AppsDetails from "./Pages/AppsDetails";
import Games from "./Pages/Games";
import AppsAll from "./Pages/AppsAll";
import AuthContext, { authContext } from "./Utils/AuthContext";
import Login from "./Pages/Login";

export default function App() {
  const {token} = useContext(authContext)
  return (
    <>
      <BrowserRouter>   
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to={'/'} />} />
            <Route path="/apps-all/:name" element={<AppsAll />} />
            <Route path="/apps-details/:id" element={<AppsDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <BottomNav />
          <Footer />
      </BrowserRouter>
    </>
  );
}
