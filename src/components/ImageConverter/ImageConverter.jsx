// src/components/ImageConverter/ImageConverter.jsx

import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { FaUpload, FaFileImage } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageConverter = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const [files, setFiles] = useState([]);
	const [convertedImages, setConvertedImages] = useState([]);
	const [format, setFormat] = useState('jpg');
	const [removeBg, setRemoveBg] = useState(false);

	const handleDrop = (event) => {
		event.preventDefault();
		const uploadedFiles = Array.from(event.dataTransfer.files);
		setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
	};

	const handleFileInput = (event) => {
		const uploadedFiles = Array.from(event.target.files);
		setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const convertImages = async () => {
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};

		const converted = await Promise.all(
			files.map(async (file) => {
				let processedFile = file;
				if (removeBg) {
					// Implement background removal here (using an external API like remove.bg)
					// Example: processedFile = await removeBackground(file);
				}
				const compressedFile = await imageCompression(processedFile, options);
				const convertedFile = new File(
					[compressedFile],
					compressedFile.name.replace(/\.[^.]+$/, `.${format}`),
					{ type: `image/${format}` }
				);
				return URL.createObjectURL(convertedFile);
			})
		);

		setConvertedImages(converted);
	};

	return (
		<div
			className='image-converter-container p-6 bg-gray-900 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				Image Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your images here to convert them to different formats.
			</p>

			<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
				<label className='flex items-center'>
					<input
						type='checkbox'
						className='mr-2'
						checked={removeBg}
						onChange={() => setRemoveBg(!removeBg)}
					/>
					Remove Background
				</label>
				<select
					value={format}
					onChange={(e) => setFormat(e.target.value)}
					className='border rounded px-2 py-1'>
					<option value='jpg'>JPG</option>
					<option value='png'>PNG</option>
					<option value='webp'>WEBP</option>
					<option value='gif'>GIF</option>
				</select>
			</div>

			<div
				className='drag-drop-area border-4 border-dashed border-orange-500 rounded-lg p-6 bg-white flex flex-col items-center justify-center'
				onDrop={handleDrop}
				onDragOver={handleDragOver}>
				<FaUpload className='w-16 h-16 text-orange-500 mb-4' />
				<p className='text-gray-700 mb-4'>Drag & Drop your files here or</p>
				<input
					type='file'
					multiple
					className='hidden'
					id='file-input'
					onChange={handleFileInput}
				/>
				<label
					htmlFor='file-input'
					className='cursor-pointer bg-orange-500 text-white px-4 py-2 rounded'
					data-aos='slide-left'>
					Browse Files
				</label>
			</div>

			<div className='files-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{files.map((file, index) => (
					<div
						key={index}
						className='file-item p-4 bg-white rounded-lg shadow-md flex items-center space-x-4'>
						<FaFileImage className='w-10 h-10 text-orange-500' />
						<span className='text-gray-700' data-aos='fade-down'>
							{file.name}
						</span>
					</div>
				))}
			</div>

			<button
				onClick={convertImages}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded'
				data-aos='slide-left'>
				Convert Images
			</button>

			<div className='converted-images mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{convertedImages.map((url, index) => (
					<div
						key={index}
						className='converted-image-item p-4 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4'>
						<img
							src={url}
							alt={`Converted ${index}`}
							className='w-full h-auto rounded'
							data-aos='fade-up'
						/>
						<a
							href={url}
							download={`converted_${index}.${format}`}
							className='text-blue-500'
							data-aos='slide-right'>
							Download
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageConverter;
