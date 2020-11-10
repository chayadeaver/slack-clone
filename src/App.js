import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat'
import Login from './components/authentication/Login';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function App() {
  
  const [{ user }, dispatch ] = useStateValue()

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router -> Chat screen */} 
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
