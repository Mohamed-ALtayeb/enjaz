import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import CardToPrint from './components/CardToPrint';
import Form from './components/Form';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        {/* <Route path='/card' element={<Card />} /> */}
        <Route path='/toprint' element={<CardToPrint />} />
      </Routes>
    </div>
  );
};

export default App;
