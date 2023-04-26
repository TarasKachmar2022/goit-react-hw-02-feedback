import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
