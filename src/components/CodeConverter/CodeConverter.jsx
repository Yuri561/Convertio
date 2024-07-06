// src/components/CodeConverter/CodeConverter.jsx

import React, { useState } from 'react';

const CodeConverter = () => {
	const [file, setFile] = useState(null);
	const [sourceLang, setSourceLang] = useState('javascript');
	const [targetLang, setTargetLang] = useState('typescript');

	const handleFileInput = (event) => {
		setFile(event.target.files[0]);
	};

	const handleConversion = () => {
		// Add your code conversion logic here
	};

	return (
		<div className='p-6'>
			<h1 className='text-3xl font-bold mb-4'>Code Converter</h1>
			<p className='mb-4'>
				Convert your code files to different formats with ease.
			</p>
			<div className='mt-4'>
				<input type='file' className='mb-4' onChange={handleFileInput} />
				<div className='mb-4'>
					<label className='mr-2'>From:</label>
					<select
						value={sourceLang}
						onChange={(e) => setSourceLang(e.target.value)}
						className='border rounded px-2 py-1 mr-4'>
						<option value='javascript'>JavaScript</option>
						<option value='python'>Python</option>
						<option value='java'>Java</option>
						<option value='csharp'>C#</option>
					</select>
					<label className='mr-2'>To:</label>
					<select
						value={targetLang}
						onChange={(e) => setTargetLang(e.target.value)}
						className='border rounded px-2 py-1'>
						<option value='typescript'>TypeScript</option>
						<option value='javascript'>JavaScript</option>
						<option value='python'>Python</option>
						<option value='java'>Java</option>
						<option value='csharp'>C#</option>
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

export default CodeConverter;
