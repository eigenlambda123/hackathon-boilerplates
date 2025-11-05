import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NotificationListener from "./components/Notifications/NotificationListener";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
        <NotificationListener />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
