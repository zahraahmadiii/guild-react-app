import { useState } from 'react';
import './App.css';
import './style.css';
import "./fonts.css";
import MultiStep from './components/MultiStep';
function App() {
  return (
    <div className='app'>
      <div className='side-show'>
        <p className='title'>ثبت نام شاغلین در کسب و کارها</p>
      </div>
      <div className='content'>
        <div className='progress-bar'>
       
        </div>
       <MultiStep/>
      </div>
    </div>
  );
}

export default App;