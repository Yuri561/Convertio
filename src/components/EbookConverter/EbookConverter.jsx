// src/components/EbookConverter/EbookConverter.jsx

import React, { useState } from 'react';

import { FaUpload } from'react-icons/fa';

const EbookConverter = () => {
	const [file, setFile] = useState(null);
	const [format, setFormat] = useState('pdf');

	const handleFileInput = (event) => {
		setFile(event.target.files[0]);
	};

	const handleConversion = () => {
		// Add your eBook conversion logic here
	};
	const handleDragOver = (event) => {
		event.preventDefault();
    };
    
    const handleDrop = (event) => {
        event.preventDefault();
    }

	return (
		<div className='p-6'>
			<h1 className='text-3xl font-bold mb-4'>eBook Converter</h1>
			<p className='mb-4'>
				Convert your eBooks to different formats with ease.
			</p>
			<div
				className='drag-drop-area border-4 border-dashed border-orange-500 rounded-lg p-6 bg-white flex flex-col items-center justify-center'
				onDrop={handleDrop}
				onDragOver={handleDragOver}>
				<FaUpload
					className='w-16 h-16 text-orange-500 mb-4'
					data-aos='fade-up'
				/>
				<p className='text-gray-700 mb-4' data-aos='fade-down'>
					Drag & Drop your files here or
				</p>
				<input type='file' multiple className='hidden' id='file-input' />
				<label
					htmlFor='file-input'
					className='cursor-pointer bg-orange-500 text-white px-4 py-2 rounded'
					data-aos='slide-left'>
					Browse Files
				</label>
			</div>

			<div className='mt-4'>
				<input type='file' className='mb-4' onChange={handleFileInput} />
				<div className='mb-4'>
					<label className='mr-2'>Convert to:</label>
					<select
						value={format}
						onChange={(e) => setFormat(e.target.value)}
						className='border rounded px-2 py-1'>
						<option value='pdf'>PDF</option>
						<option value='epub'>EPUB</option>
						<option value='mobi'>MOBI</option>
						<option value='azw3'>AZW3</option>
					</select>
				</div>
				<button
					className='px-4 py-2 bg-orange-500 text-white rounded'
					onClick={handleConversion}>
					Convert
				</button>
			</div>
		</div>
	);
};

export default EbookConverter;
