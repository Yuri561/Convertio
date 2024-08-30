import React from 'react';
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
    return (
        <section className='bg-gray-100 min-h-screen border-l'>
            {/* Hero Section */}
            <div className='container mx-auto px-6 py-20'>
                <div className='grid lg:grid-cols-2 gap-12'>
                    <div>
                        <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>
                            Welcome to <span className='text-orange-500'>Convertio</span>
                        </h1>
                        <p className='text-lg text-gray-700 mb-8'>
                            The ultimate tool to convert your documents, images, and media to any format with just a few clicks. Simple, fast, and reliable.
                        </p>
                        <Link to='/pdf-converter/' className='btn btn-primary'>
                            Start Converting Now
                        </Link>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={pdfIcon} alt='PDF Converter' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>PDF Converter</h3>
                            </div>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={mp4Icon} alt='MP4 to MP3' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>MP4 to MP3</h3>
                            </div>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={wordIcon} alt='Word Converter' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>Word Converter</h3>
                            </div>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={imgIcon} alt='Image Converter' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>Image Converter</h3>
                            </div>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={audioIcon} alt='Audio Converter' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>Audio Converter</h3>
                            </div>
                            <div className='p-6 bg-white rounded-lg shadow-md'>
                                <img src={videoIcon} alt='Video Converter' className='w-12 h-12 mb-4 mx-auto' />
                                <h3 className='text-xl font-medium text-center'>Video Converter</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='bg-white py-16'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                        Why Choose Convertio?
                    </h2>
                    <div className='grid gap-10 md:grid-cols-3'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-medium text-gray-800 mb-4'>Easy to Use</h3>
                            <p className='text-gray-600'>
                                Convertio offers a user-friendly interface that makes file conversion easy for everyone.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-medium text-gray-800 mb-4'>High-Quality Conversions</h3>
                            <p className='text-gray-600'>
                                Our conversion tools ensure your files are of the highest quality possible.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-medium text-gray-800 mb-4'>Supports Multiple Formats</h3>
                            <p className='text-gray-600'>
                                Convertio supports a wide range of formats for documents, images, audio, and video files.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className='bg-gray-50 py-16'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                        What Our Users Say
                    </h2>
                    <div className='grid gap-10 md:grid-cols-3'>
                        <div className='p-6 bg-white rounded-lg shadow-md text-center'>
                            <p className='text-gray-700 mb-4'>
                                "This tool is incredibly easy to use and the conversions are always spot on!"
                            </p>
                            <p className='text-gray-900 font-bold'>- John Doe</p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow-md text-center'>
                            <p className='text-gray-700 mb-4'>
                                "I can convert all my files without any hassle. Highly recommended!"
                            </p>
                            <p className='text-gray-900 font-bold'>- Jane Smith</p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow-md text-center'>
                            <p className='text-gray-700 mb-4'>
                                "Convertio is the best file conversion tool I've ever used."
                            </p>
                            <p className='text-gray-900 font-bold'>- Robert Lee</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className='bg-blue-600 py-16 text-white text-center'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold mb-6'>
                        Ready to Get Started?
                    </h2>
                    <p className='text-lg mb-8'>
                        Sign up today and start converting your files quickly and easily.
                    </p>
                    <Link to='/sign-up' className='btn btn-light'>
                        Sign Up Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
