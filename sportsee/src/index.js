import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


//<App /><React.StrictMode></React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>
          <Routes>
              <Route path='/:id' element={<Home />} />
          </Routes>
      </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
