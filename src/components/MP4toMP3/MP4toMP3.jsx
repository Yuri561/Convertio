import React, { useState, useEffect } from 'react';
import { FaFileVideo, FaUpload, FaFileAudio } from 'react-icons/fa';



const MP4toMP3 = () => {
	const [files, setFiles] = useState([]);
	const [audioUrl, setAudioUrl] = useState(null);
	const [ffmpeg, setFfmpeg] = useState(null);

	useEffect(() => {
		const loadFFmpeg = async () => {
			const { createFFmpeg, fetchFile } = await import(
				'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.9.8'
			);
			const ffmpeg = createFFmpeg({ log: true });
			setFfmpeg({ createFFmpeg, fetchFile, ffmpeg });
			await ffmpeg.load();
		};

		loadFFmpeg();
	}, []);

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

	const convertToMp3 = async () => {
		if (!ffmpeg) return;
		const { createFFmpeg, fetchFile } = ffmpeg;

		const ffmpegInstance = createFFmpeg({ log: true });

		for (const file of files) {
			await ffmpegInstance.load();
			ffmpegInstance.FS('writeFile', file.name, await fetchFile(file));
			await ffmpegInstance.run('-i', file.name, 'output.mp3');
			const data = ffmpegInstance.FS('readFile', 'output.mp3');

			const audioBlob = new Blob([data.buffer], { type: 'audio/mp3' });
			const url = URL.createObjectURL(audioBlob);
			setAudioUrl(url);
		}
	};

	return (
		<div
			className='mp4-to-mp3-converter-container p-6 bg-gray-100 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				MP4 to MP3 Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your MP4 videos here to convert them to MP3 audio.
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
						<FaFileVideo className='w-10 h-10 text-orange-500' />
						<span className='text-gray-700'>{file.name}</span>
					</div>
				))}
			</div>

			<button
				onClick={convertToMp3}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded'
				data-aos='slide-left'>
				Convert to MP3
			</button>

			{audioUrl && (
				<div className='mt-8' data-aos='slide-right'>
					<a href={audioUrl} download='converted.mp3' className='text-blue-500'>
						Download MP3
					</a>
				</div>
			)}
		</div>
	);
};

export default MP4toMP3;
