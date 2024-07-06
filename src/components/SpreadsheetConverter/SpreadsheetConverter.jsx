// src/components/SpreadsheetConverter/SpreadsheetConverter.jsx

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { FaUpload, FaFileExcel } from 'react-icons/fa';


const SpreadsheetConverter = () => {

	const [files, setFiles] = useState([]);
	const [convertedFiles, setConvertedFiles] = useState([]);

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

	const convertSpreadsheet = async () => {
		const converted = await Promise.all(
			files.map(async (file) => {
				const data = await file.arrayBuffer();
				const workbook = XLSX.read(data, { type: 'array' });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const csv = XLSX.utils.sheet_to_csv(worksheet);

				const blob = new Blob([csv], { type: 'text/csv' });
				const url = URL.createObjectURL(blob);
				return url;
			})
		);

		setConvertedFiles(converted);
	};

	return (
		<div
			className='spreadsheet-converter-container p-6 bg-gray-900 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				Spreadsheet Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your spreadsheet files here to convert them to different
				formats.
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
						<FaFileExcel className='w-10 h-10 text-orange-500' />
						<span className='text-gray-700' data-aos='fade-down'>
							{file.name}
						</span>
					</div>
				))}
			</div>

			<button
				onClick={convertSpreadsheet}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded'
				data-aos='slide-left'>
				Convert Spreadsheets
			</button>

			<div className='converted-files mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{convertedFiles.map((url, index) => (
					<div
						key={index}
						className='converted-file-item p-4 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4'>
						<FaFileExcel className='w-10 h-10 text-orange-500' />
						<a
							href={url}
							download={`converted_${index}.csv`}
							className='text-blue-500'
							data-aos='slide-right'>
							Download CSV
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default SpreadsheetConverter;
