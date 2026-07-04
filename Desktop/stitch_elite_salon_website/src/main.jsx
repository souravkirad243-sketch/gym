import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Booking = lazy(() => import("./pages/Booking.jsx"));
const LegalPage = lazy(() => import("./pages/LegalPage.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-surface pt-32 text-center font-body text-primary">Loading...</div>}>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="book" element={<Booking />} />
            <Route path="contact" element={<Booking />} />
            <Route path="privacy-policy" element={<LegalPage title="Privacy Policy" />} />
            <Route path="terms-of-service" element={<LegalPage title="Terms of Service" />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
