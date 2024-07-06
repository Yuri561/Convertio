import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import Sidebar from './components/Sidebar/Sidebar'; // Adjust the path as needed
import './index.css';
import './App.css';
import Logo from '/1.png';

import PdfConverter from './components/PdfConverter/PdfConverter';
import Mp4ToMp3Converter from './components/MP4toMP3/MP4toMP3';
import Home from './components/Home/Home';
import WordConverter from './components/WordConverter/WordConverter';
import ImageConverter from './components/ImageConverter/ImageConverter';
import ZipConverter from './components/ZipConverter/ZipConverter';
import EbookConverter from './components/EbookConverter/EbookConverter';
import SpreadsheetConverter from './components/SpreadsheetConverter/SpreadsheetConverter';
import CodeConverter from './components/CodeConverter/CodeConverter';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Router>
			<div className='flex flex-col h-screen'>
				<Navbar setSidebarOpen={setSidebarOpen} />
				<div className='flex flex-grow overflow-hidden'>
					<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
					<main className='flex-grow overflow-y-auto'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/pdf-converter' element={<PdfConverter />} />
							<Route path='/mp4-to-mp3' element={<Mp4ToMp3Converter />} />
							<Route path='/word-converter' element={<WordConverter />} />
							<Route path='/image-converter' element={<ImageConverter />} />
							<Route path='/zip-converter' element={<ZipConverter />} />
							<Route path='/ebook-converter' element={<EbookConverter />} />
							<Route
								path='/spreadsheet-converter'
								element={<SpreadsheetConverter />}
							/>
							<Route path='/code-converter' element={<CodeConverter />} />
						</Routes>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

const Navbar = ({ setSidebarOpen }) => {
	return (
		<header className='flex justify-between items-center p-4 nav-color shadow'>
			<div className='text-xl font-bold flex items-center space-x-2'>
				<img src={Logo} alt='Convertio logo' className='w-10 h-10' />
				<span>Convertio</span>
			</div>
			<div className='flex items-center space-x-4'>
				<input
					type='text'
					placeholder='Search...'
					className='hidden md:block px-4 py-2 border rounded'
				/>
				<button
					onClick={() => setSidebarOpen(true)}
					className='md:hidden text-white focus:outline-none'>
					<FaBars className='h-6 w-6' />
				</button>
				<div className='relative'>
					<button className='focus:outline-none'>
						<FaUser className='h-8 w-8 rounded-full text-white' />
					</button>
					<div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden'>
						<Link to='/profile' className='px-4 py-2'>
							Your profile
						</Link>
						<Link to='/sign-out' className='px-4 py-2'>
							Sign out
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

const Footer = () => {
	return (
		<footer className='bg-orange-500 text-white p-4 flex justify-center items-center'>
			<p>© 2024 Convertio. All rights reserved.</p>
		</footer>
	);
};

export default App;
