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
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  return (
		<div
			className='pdf-converter-container p-6 bg-gray-900 min-h-screen'
			data-aos='zoom-in'>
			<h1
				className='text-4xl font-extrabold mb-4 text-orange-500'
				data-aos='slide-left'>
				PDF Converter
			</h1>
			<p className='text-lg mb-8 text-gray-700' data-aos='slide-right'>
				Drag and drop your documents here to convert them to PDF.
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
				onClick={convertToPdf}
				className='mt-6 bg-orange-500 text-white px-4 py-2 rounded' data-aos='slide-left'>
				Convert to PDF
			</button>

			{pdfUrl && (
				<div className='mt-8'>
					<a href={pdfUrl} download='converted.pdf' className='text-blue-500' data-aos='slide-right'>
						Download PDF
					</a>
				</div>
			)}
		</div>
	);
};

export default PdfConverter;
