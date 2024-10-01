import './App.css';
import Contents from './components/contents/Contents';
import Header from './components/header/Header';
import React from 'react';

function App() {
  return (
    <div className='Wrapper'>
      <div><Header /></div>
      <div><Contents /></div>
    </div>
  );
}

export default App;
