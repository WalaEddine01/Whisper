import './index.css';
import './styles/fonts.css';
import './styles/GlobalVarables.css';

import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import socket from './utils/socket'; // Adjust the path as necessary

socket;




// import { Workbox } from 'workbox-window'; // Import Workbox for service worker handling

// if ('serviceWorker' in navigator) {
//   const wb = new Workbox('/sw.js'); // Specify the path to your service worker file
//   wb.addEventListener('activated', (event) => {
//     if (!event.isUpdate) {
//       console.log('Service worker activated for the first time!');
//     } else {
//       console.log('Service worker activated again due to update.');
//     }
//   });
//   wb.register(); // Register the service worker
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
);

