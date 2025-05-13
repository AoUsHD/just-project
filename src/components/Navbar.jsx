import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded hover:bg-white hover:text-black transition ${
        location.pathname === to ? "bg-white text-black font-semibold" : "text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gradient-to-br from-[#1f1f47] via-[#6f1d64] to-[#c84b31] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">just project</Link>
        <div className="space-x-2">
          {navLink("/whois", "WHOIS")}
          {navLink("/dns", "DNS Lookup")}
        </div>
      </div>
    </nav>
  );
}
