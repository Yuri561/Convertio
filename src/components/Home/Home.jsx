import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdfIcon from '../../../public/PdfIcon.png';
import mp4Icon from '../../../public/MP3Icon.png';
import wordIcon from '../../../public/WordIcon.png';
import moreIcon from '../../../public/GeneralIcon.png';
import imgIcon from '../../../public/photoIcon.png';
import audioIcon from '../../../public/audioIcon.png';
import videoIcon from '../../../public/videoIcon.png';
import zipIcon from '../../../public/zipIcon.png';
import './Home.css';

const Home = () => {
	useEffect(() => {
		const carousels = document.querySelectorAll('[data-carousel]');
		carousels.forEach((carousel) => {
			const items = carousel.querySelectorAll('[data-carousel-item]');
			const nextButton = carousel.querySelector('[data-carousel-next]');
			const prevButton = carousel.querySelector('[data-carousel-prev]');
			const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
			let currentIndex = 0;

			function showSlide(index) {
				items.forEach((item, i) => {
					item.classList.toggle('hidden', i !== index);
				});

				indicators.forEach((indicator, i) => {
					indicator.classList.toggle('active', i === index);
				});

				currentIndex = index;
			}

			nextButton.addEventListener('click', () => {
				const nextIndex = (currentIndex + 1) % items.length;
				showSlide(nextIndex);
			});

			prevButton.addEventListener('click', () => {
				const prevIndex = (currentIndex - 1 + items.length) % items.length;
				showSlide(prevIndex);
			});

			indicators.forEach((indicator, index) => {
				indicator.addEventListener('click', () => {
					showSlide(index);
				});
			});

			showSlide(0); // Initialize the first slide
		});
	}, []);

	return (
		<section className='bg-gray-900 min-h-screen border-l' data-aos='zoom-in'>
			<div className='container mx-auto px-4 py-16'>
				<div className='grid lg:grid-cols-12 gap-8'>
					<div className='lg:col-span-7'>
						<h1 className='text-5xl font-extrabold text-white mb-8'>
							Ultimate <span className='text-orange-500'>Conversion</span> Tool
							for All Your Needs
						</h1>
						<p className='text-lg text-gray-400 mb-8'>
							Convert documents, media, and more with ease. Our all-in-one
							conversion tool helps you transform files to the formats you need
							in just a few clicks.
						</p>
						<div className='flex flex-wrap items-center space-x-4'>
							<Link to='/pdf-converter/' className='btn btn-primary'>
								Get started
								<svg
									className='w-5 h-5 ml-2'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</Link>
							<a href='#' className='btn btn-secondary'>
								Blog
							</a>
						</div>
					</div>
					<div className='lg:col-span-5 mt-10 lg:mt-0'>
						<div
							id='carousel-icons'
							className='relative w-full h-96 bg-blue-900 rounded-lg shadow-lg overflow-hidden'
							data-carousel='static'>
							<div className='relative h-full overflow-hidden rounded-lg shadow-lg'>
								<div
									className='grid grid-cols-2 gap-5 duration-700 ease-in-out my-12'
									data-carousel-item>
									<div className='card'>
										<img
											src={pdfIcon}
											alt='PDF Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>Convert to PDF</span>
									</div>
									<div className='card'>
										<img
											src={mp4Icon}
											alt='MP4 to MP3'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>MP4 to MP3</span>
									</div>
									<div className='card'>
										<img
											src={wordIcon}
											alt='Word Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>Convert to Word</span>
									</div>
									<div className='card'>
										<img
											src={moreIcon}
											alt='More Conversions'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>
											More Conversions
										</span>
									</div>
								</div>
								<div
									className='grid grid-cols-2 gap-5 duration-700 ease-in-out'
									data-carousel-item>
									<div className='card'>
										<img
											src={imgIcon}
											alt='Image Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>Image Converter</span>
									</div>
									<div className='card'>
										<img
											src={audioIcon}
											alt='Audio Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>Audio Converter</span>
									</div>
									<div className='card'>
										<img
											src={videoIcon}
											alt='Video Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>Video Converter</span>
									</div>
									<div className='card'>
										<img
											src={zipIcon}
											alt='ZIP Converter'
											className='w-16 h-16 mb-2 mx-auto'
										/>
										<span className='text-lg font-medium'>ZIP Converter</span>
									</div>
								</div>
							</div>
							<div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
								<button
									type='button'
									className='w-3 h-3 rounded-full'
									aria-current='true'
									aria-label='Slide 1'
									data-carousel-slide-to='0'></button>
								<button
									type='button'
									className='w-3 h-3 rounded-full'
									aria-label='Slide 2'
									data-carousel-slide-to='1'></button>
							</div>
							<button
								type='button'
								className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
								data-carousel-prev>
								<span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none'>
									<svg
										className='w-4 h-4 text-white rtl:rotate-180'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 6 10'>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 1 1 5l4 4'
										/>
									</svg>
									<span className='sr-only'>Previous</span>
								</span>
							</button>
							<button
								type='button'
								className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
								data-carousel-next>
								<span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none'>
									<svg
										className='w-4 h-4 text-white rtl:rotate-180'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 6 10'>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m1 9 4-4-4-4'
										/>
									</svg>
									<span className='sr-only'>Next</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className='bg-gray-50 dark:bg-gray-800 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center'>
						Our Features
					</h2>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						<div className='p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
								Easy to Use
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mt-4'>
								Our tool is user-friendly and easy to navigate.
							</p>
						</div>
						<div className='p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
								High-Quality Conversions
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mt-4'>
								We provide high-quality conversions for all file types.
							</p>
						</div>
						<div className='p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
								Fast and Efficient
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mt-4'>
								Our conversion process is quick and efficient.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className='bg-white dark:bg-gray-900 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center'>
						What Our Users Say
					</h2>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						<div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<p className='text-gray-600 dark:text-gray-300'>
								"This tool is amazing! It makes conversions so easy and fast!"
							</p>
							<p className='text-gray-900 dark:text-white font-bold mt-4'>
								- Rashaad Evans
							</p>
						</div>
						<div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<p className='text-gray-600 dark:text-gray-300'>
								"I love how user-friendly and efficient this tool is."
							</p>
							<p className='text-gray-900 dark:text-white font-bold mt-4'>
								Jonathan Smith
							</p>
						</div>
						<div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105'>
							<p className='text-gray-600 dark:text-gray-300'>
								"The best conversion tool I've used. Highly recommend!"
							</p>
							<p className='text-gray-900 dark:text-white font-bold mt-4'>
								Belinda Saint-Croix
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action Section */}
			<div className='bg-blue-900 py-16 text-white text-center'>
				<div className='container mx-auto px-4'>
					<h2 className='text-4xl font-extrabold mb-4'>
						Get Started with Convertio Today!
					</h2>
					<p className='text-lg mb-8'>
						Sign up now and start converting your files with ease.
					</p>
					<Link to='/sign-up' className='btn btn-secondary text-orange-300'>
						Sign Up Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
