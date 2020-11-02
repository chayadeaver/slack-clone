import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Chaya's Slack Clone!</h1>

      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-Router -> */} 
      </div>
      
    </div>
  );
}

export default App;
