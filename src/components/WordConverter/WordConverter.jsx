import React, { useState } from 'react';
import { FaFileWord, FaUpload, FaFile } from 'react-icons/fa';
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

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
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
    <div className='word-converter-container p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-4xl font-extrabold mb-4 text-gray-900'>
        Word Converter
      </h1>
      <p className='text-lg mb-8 text-gray-600'>
        Easily convert your documents to Word format. Just drag and drop your files below or click to browse.
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
            <FaFile className='w-8 h-8 text-gray-700' />
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
        onClick={convertToWord}
        className='mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
        Convert to Word
      </button>
    </div>
  );
};

export default WordConverter;
