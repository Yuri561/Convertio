// src/components/ZipConverter/ZipConverter.jsx

import React, { useState} from 'react';
import JSZip from 'jszip';
import { FaUpload, FaFile } from 'react-icons/fa';



const ZipConverter = () => {

	const [files, setFiles] = useState([]);
	const [zipUrl, setZipUrl] = useState(null);

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

	const convertToZip = async () => {
		const zip = new JSZip();

		files.forEach((file) => {
			zip.file(file.name, file);
		});

		const zipBlob = await zip.generateAsync({ type: 'blob' });
		const url = URL.createObjectURL(zipBlob);
		setZipUrl(url);
	};

	return (
		<div
			className='zip-converter-container p-6 bg-gray-900 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				ZIP Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your files here to convert them to ZIP format.
			</p>

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
						<FaFile className='w-10 h-10 text-orange-500' />
						<span className='text-gray-700' data-aos='fade-down'>
							{file.name}
						</span>
					</div>
				))}
			</div>

			<button
				onClick={convertToZip}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded'
				data-aos='slide-left'>
				Convert to ZIP
			</button>

			{zipUrl && (
				<div className='mt-8'>
					<a
						href={zipUrl}
						download='converted.zip'
						className='text-blue-500'
						data-aos='slide-right'>
						Download ZIP
					</a>
				</div>
			)}
		</div>
	);
};

export default ZipConverter;
