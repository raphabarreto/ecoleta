import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
