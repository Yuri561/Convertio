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

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
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
    <div className='mp4-to-mp3-converter-container p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-4xl font-extrabold mb-4 text-gray-900'>
        MP4 to MP3 Converter
      </h1>
      <p className='text-lg mb-8 text-gray-600'>
        Easily convert your MP4 videos to MP3 audio. Just drag and drop your files below or click to browse.
      </p>

      <div
        className='drag-drop-area border-2 border-dashed border-gray-400 rounded-lg p-8 bg-gray-100 flex flex-col items-center justify-center hover:border-gray-600 transition'
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <FaUpload className='w-16 h-16 text-gray-400 mb-4' />
        <p className='text-gray-600 mb-4'>Drag & Drop your files here or</p>
        <input
          type='file'
          multiple
          className='hidden'
          id='file-input'
          onChange={handleFileInput}
        />
        <label
          htmlFor='file-input'
          className='cursor-pointer bg-gray-900 text-white px-6 py-2 rounded'>
          Browse Files
        </label>
      </div>

      <div className='files-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {files.map((file, index) => (
          <div
            key={index}
            className='file-item p-4 bg-white rounded-lg shadow-sm flex items-center space-x-4'>
            <FaFileVideo className='w-8 h-8 text-gray-700' />
            <span className='text-gray-800'>
              {file.name}
            </span>
            <span
              className='cursor-pointer text-red-500'
              onClick={() => removeFile(index)}>
              X
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={convertToMp3}
        className='mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
        Convert to MP3
      </button>

      {audioUrl && (
        <div className='mt-8'>
          <a href={audioUrl} download='converted.mp3' className='text-blue-600'>
            Download MP3
          </a>
        </div>
      )}
    </div>
  );
};

export default MP4toMP3;
