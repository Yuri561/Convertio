import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import ChevronUp
import sideObj from '../../mapData/SideObj'; // Adjust the path as needed

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
	const [openCategory, setOpenCategory] = useState(null);

	const toggleCategory = (category) => {
		setOpenCategory(openCategory === category ? null : category);
	};

	return (
		<div
			className={`fixed inset-y-0 left-0 transform ${
				sidebarOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-200 ease-in-out bg-gray-800 text-white z-50 md:relative md:translate-x-0`}>
			<div className='p-4 flex justify-between items-center md:hidden'>
				<h2 className='text-2xl font-bold'>Convertio</h2>
				<button
					onClick={() => setSidebarOpen(false)}
					className='text-white focus:outline-none'>
					<FaTimes className='h-6 w-6' />
				</button>
			</div>
			<nav className='space-y-2 p-4'>
				<ul>
					{sideObj.map((item, index) => (
						<li key={index}>
							{item.urls ? (
								<>
									<button
										onClick={() => toggleCategory(item.title)}
										className='p-2 flex justify-between items-center rounded hover:bg-gray-700 border my-2 w-full text-left'>
										<div className='flex items-center'>
											<item.icon className='mr-2' />
											{item.title}
										</div>
										<div>
											{openCategory === item.title ? (
												<ChevronUp />
											) : (
												<ChevronDown />
											)}
										</div>
									</button>
									{openCategory === item.title && (
										<ul className='ml-4 space-y-2'>
											{item.urls.map((subItem, subIndex) => (
												<li key={subIndex}>
													<Link
														to={subItem.url}
														className='block p-2 rounded hover:bg-gray-700 border my-2'
														onClick={() => setSidebarOpen(false)}>
														{subItem.title}
													</Link>
												</li>
											))}
										</ul>
									)}
								</>
							) : (
								<Link
									to={item.url}
									className='block p-2 rounded hover:bg-gray-700 border my-2'
									onClick={() => setSidebarOpen(false)}>
									<div className='flex items-center'>
										<item.icon className='mr-2' />
										{item.title}
									</div>
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
