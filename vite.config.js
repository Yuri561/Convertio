import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['@ffmpeg/ffmpeg', 'aos'],
	},
	resolve: {
		alias: {
			aos: 'aos',
			'aos/dist/aos.css': 'aos/dist/aos.css',
		},
	},
});
