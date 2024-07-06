import React, { useState} from 'react';
import { FaFileWord, FaUpload } from 'react-icons/fa';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';



const WordConverter = () => {
	const [files, setFiles] = useState([]);



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

	const convertToWord = async () => {
		for (const file of files) {
			const reader = new FileReader();

			reader.onload = async (event) => {
				const content = event.target.result;
				const doc = new Document({
					sections: [
						{
							children: [
								new Paragraph({
									children: [new TextRun(content)],
								}),
							],
						},
					],
				});

				const blob = await Packer.toBlob(doc);
				saveAs(blob, file.name.replace(/\.[^/.]+$/, '.docx'));
			};

			reader.readAsText(file);
		}
	};

	return (
		<div
			className='word-converter-container p-6 bg-gray-900 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				Word Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your documents here to convert them to Word format.
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
						className='file-item p-4 bg-white rounded-lg shadow-md flex items-center space-x-4'
						data-aos='fade-down'>
						<FaFileWord className='w-10 h-10 text-orange-500' />
						<span className='text-gray-700'>{file.name}</span>
					</div>
				))}
			</div>

			<button
				onClick={convertToWord}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded'
				data-aos='slide-left'>
				Convert to Word
			</button>
		</div>
	);
};

export default WordConverter;
