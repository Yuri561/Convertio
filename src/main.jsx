import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1500,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
