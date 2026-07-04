import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer.jsx";
import Header from "./layouts/Header.jsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-fixed-dim selection:text-primary">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
