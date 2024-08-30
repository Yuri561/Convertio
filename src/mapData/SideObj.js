import { House } from 'lucide-react';
import { FaFilePdf, FaFileVideo, FaArchive, FaEllipsisH } from 'react-icons/fa';

const sideObj = [
	{
		title: 'Home',
		url: '/',
		icon: House,
	},
	{
		title: 'Documents',
		urls: [
			{
				title: 'Convert to PDF',
				url: '/pdf-converter',
			},
			{
				title: 'Convert to Word',
				url: '/word-converter',
			},
		],
		icon: FaFilePdf,
	},
	{
		title: 'Media',
		urls: [
			{
				title: 'MP4 to MP3',
				url: '/mp4-to-mp3',
			},
			{
				title: 'Image Converter',
				url: '/image-converter',
			},
		],
		icon: FaFileVideo,
	},
	// {
	// 	title: 'Archives',
	// 	urls: [
	// 		{
	// 			title: 'Zip Archive',
	// 			url: '/zip-archive',
	// 		},
	// 	],
	// 	icon: FaArchive,
	// },
	// {
	// 	title: 'Others',
	// 	urls: [
	// 		{
	// 			title: 'eBook Converter',
	// 			url: '/ebook-converter',
	// 		},
	// 		{
	// 			title: 'Subtitle Converter',
	// 			url: '/subtitle-converter',
	// 		},
	// 		{
	// 			title: 'Spreadsheet Converter',
	// 			url: '/spreadsheet-converter',
	// 		},
	// 		{
	// 			title: 'Code Converter',
	// 			url: '/code-converter',
	// 		},
	// 	],
	// 	icon: FaEllipsisH,
	// },
];

export default sideObj;
