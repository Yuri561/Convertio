import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFilePdf, FaFileVideo, FaFileAudio, FaArchive, FaEllipsisH, FaImage, FaBook, FaFileCode, FaDatabase, FaCalendar, FaEnvelope } from 'react-icons/fa';
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
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out bg-gray-800 text-white z-50 md:relative md:translate-x-0`}>
      <div className="p-4 flex justify-between items-center md:hidden">
        <h2 className="text-2xl font-bold">Convertio</h2>
        <button onClick={() => setSidebarOpen(false)} className="text-white focus:outline-none">
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      <nav className="space-y-2 p-4 overflow-y">
        <ul>
          <li><Link to="/" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li>
            <button onClick={() => toggleCategory('document')} className="block p-2 rounded hover:bg-gray-700 border my-2 w-full text-left">
              <FaFilePdf className="inline-block mr-2" /> Document Converters
            </button>
            {openCategory === 'document' && (
              <ul className="ml-4 space-y-2">
                <li><Link to="/pdf-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Convert to PDF</Link></li>
                <li><Link to="/word-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Convert to Word</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleCategory('media')} className="block p-2 rounded hover:bg-gray-700 border my-2 w-full text-left">
              <FaFileVideo className="inline-block mr-2" /> Media Converters
            </button>
            {openCategory === 'media' && (
              <ul className="ml-4 space-y-2">
                <li><Link to="/mp4-to-mp3" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>MP4 to MP3</Link></li>
                <li><Link to="/video-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Video Converter</Link></li>
                <li><Link to="/audio-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Audio Converter</Link></li>
                <li><Link to="/image-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Image Converter</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleCategory('archive')} className="block p-2 rounded hover:bg-gray-700 border my-2 w-full text-left">
              <FaArchive className="inline-block mr-2" /> Archive Converters
            </button>
            {openCategory === 'archive' && (
              <ul className="ml-4 space-y-2">
                <li><Link to="/zip-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>ZIP Converter</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleCategory('others')} className="block p-2 rounded hover:bg-gray-700 border my-2 w-full text-left">
              <FaEllipsisH className="inline-block mr-2" /> Other Converters
            </button>
            {openCategory === 'others' && (
              <ul className="ml-4 space-y-2">
                <li><Link to="/ebook-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>eBook Converter</Link></li>
                <li><Link to="/subtitle-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Subtitle Converter</Link></li>
                <li><Link to="/spreadsheet-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Spreadsheet Converter</Link></li>
                <li><Link to="/font-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Font Converter</Link></li>
                <li><Link to="/code-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Code Converter</Link></li>
                <li><Link to="/database-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Database Converter</Link></li>
                <li><Link to="/calendar-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Calendar Converter</Link></li>
                <li><Link to="/email-converter" className="block p-2 rounded hover:bg-gray-700 border my-2" onClick={() => setSidebarOpen(false)}>Email Converter</Link></li>
              </ul>
            )}
          </li>
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
