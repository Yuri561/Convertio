import React, { useState } from 'react';
import { FaFilePdf, FaUpload, FaFile } from 'react-icons/fa';
import { PDFDocument } from 'pdf-lib';

const PdfConverter = () => {
  const [files, setFiles] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);

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

  const convertToPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    
    for (const file of files) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const content = event.target.result;
        if (file.type.startsWith('image/')) {
          const image = await pdfDoc.embedJpg(content);
          const page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
          });
        } else {
          const page = pdfDoc.addPage();
          page.drawText(content, {
            x: 50,
            y: page.getHeight() - 50,
            size: 12,
          });
        }

        if (files.indexOf(file) === files.length - 1) {
          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([pdfBytes], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
          triggerDownload(url); // Trigger the download
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  const triggerDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'converted.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='pdf-converter-container p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-4xl font-extrabold mb-4 text-gray-900'>
        PDF Converter
      </h1>
      <p className='text-lg mb-8 text-gray-600'>
        Easily convert your documents to PDF format. Just drag and drop your files below or click to browse.
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
        onClick={convertToPdf}
        className='mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
        Convert to PDF
      </button>

      {pdfUrl && (
        <div className='mt-8'>
          <a href={pdfUrl} download='converted.pdf' className='text-blue-600'>
            Download Converted PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfConverter;
