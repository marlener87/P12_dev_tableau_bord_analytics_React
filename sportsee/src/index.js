import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import './styles/index.scss';

//<App /><React.StrictMode></React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
  
);

