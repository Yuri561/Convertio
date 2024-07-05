import React, { useEffect } from 'react';
import pdfIcon from '../../../public/PdfIcon.png';
import mp4Icon from '../../../public/MP3Icon.png';
import wordIcon from '../../../public/WordIcon.png';
import moreIcon from '../../../public/GeneralIcon.png';
import imgIcon from '../../../public/photoIcon.png';
import audioIcon from '../../../public/audioIcon.png';
import videoIcon from '../../../public/videoIcon.png';
import zipIcon from '../../../public/zipIcon.png';

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
    <section className="bg-white dark:bg-gray-900 p-6 min-h-screen">
      <div className="grid max-w-screen-xl px-4 py-3 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-8 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Ultimate <strong className="text-orange-300 font-bold">Conversion</strong> Tool for All Your Needs
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Convert documents, media, and more with ease. Our all-in-one conversion tool helps you transform files to the formats you need in just a few clicks.
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700">
              Get started
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg">
              Blog
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 lg:flex mt-6 lg:mt-0">
          <div id="carousel-icons" className="relative w-full h-96" data-carousel="static">
            <div className="relative h-full overflow-hidden rounded-lg md:h-90">
              <div className="grid grid-cols-2 gap-5 duration-700 ease-in-out" data-carousel-item>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={pdfIcon} alt="PDF Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">Convert to PDF</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={mp4Icon} alt="MP4 to MP3" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">MP4 to MP3</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={wordIcon} alt="Word Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">Convert to Word</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={moreIcon} alt="More Conversions" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">More Conversions</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 duration-700 ease-in-out hidden" data-carousel-item>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={imgIcon} alt="Image Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">Image Converter</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={audioIcon} alt="Audio Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">Audio Converter</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={videoIcon} alt="Video Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">Video Converter</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow dark:bg-gray-800">
                  <img src={zipIcon} alt="ZIP Converter" className="mb-2 w-16 h-16"/>
                  <span className="text-center text-lg font-medium text-gray-900 dark:text-white">ZIP Converter</span>
                </div>
              </div>
            </div>
            
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            </div>
            
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only text-white">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only text-white">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
