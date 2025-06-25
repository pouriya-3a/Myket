import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BottomNav from "./Components/BottomNav";
import Apps from "./Pages/Apps";
import NotFound from "./Pages/NotFound";
import AppsDetails from "./Pages/AppsDetails";
import Games from "./Pages/Games";
import AppsAll from "./Pages/AppsAll";

export default function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/games" element={<Games />} />
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
