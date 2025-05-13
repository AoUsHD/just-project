import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Whois } from "./pages/Whois";
import { DnsLookup } from "./pages/DnsLookup";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whois" element={<Whois />} />
            <Route path="/dns" element={<DnsLookup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
