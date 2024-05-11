import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';

const App = () => {
  return (
    <BrowserRouter basename='/personal-website'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
