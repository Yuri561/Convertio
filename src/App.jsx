import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';
import './App.css';
import Logo from '/1.png';

import PdfConverter from './components/PdfConverter/PdfConverter';
import Mp4ToMp3Converter from './components/MP4toMP3/MP4toMP3';
import Home from './components/Home/Home';
import WordConverter from './components/WordConverter/WordConverter';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="grid h-screen grid-rows-layout">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="grid grid-cols-layout">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="p-0 bg-gray-100 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pdf-converter" element={<PdfConverter />} />
              <Route path="/mp4-to-mp3" element={<Mp4ToMp3Converter />} />
              <Route path="/word-converter" element={<WordConverter />} />
              {/* Add more routes here as you add more tools */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out bg-gray-800 text-white z-50 md:relative md:translate-x-0`}>
      <div className="p-4 flex justify-between items-center md:hidden">
        <h2 className="text-2xl font-bold">Convertio</h2>
        <button onClick={() => setSidebarOpen(false)} className="text-white focus:outline-none">
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      <nav className="space-y-2 p-4">
        <ul>
          <li><Link to="/" className="block p-2 rounded hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/pdf-converter" className="block p-2 rounded hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>Convert to PDF</Link></li>
          <li><Link to="/mp4-to-mp3" className="block p-2 rounded hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>MP4 to MP3</Link></li>
          <li><Link to="/word-converter" className="block p-2 rounded hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>Convert to Word</Link></li>
          {/* Add more links here as you add more tools */}
        </ul>
      </nav>
    </div>
  );
};

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center p-4 nav-color shadow">
      <div className="text-xl font-bold flex items-center space-x-2">
        <img src={Logo} alt="Convertio logo" className="w-10 h-10" />
        <span>Convertio</span>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="hidden md:block px-4 py-2 border rounded" />
        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white focus:outline-none">
          <FaBars className="h-6 w-6" />
        </button>
        <div className="relative"> 
          <button className="focus:outline-none">
            <img src="https://via.placeholder.com/40" alt="User avatar" className="rounded-full" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden">
            <Link to="/profile" className="block px-4 py-2">Your profile</Link>
            <Link to="/sign-out" className="block px-4 py-2">Sign out</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default App;
