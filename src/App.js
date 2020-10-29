import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>

      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-Router -> */} 
      </div>
      
    </div>
  );
}

export default App;
