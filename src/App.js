// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Page from './components/Page';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Page/>
      </div>
    </Router>
  );
}

export default App;
