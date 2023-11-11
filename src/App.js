
import React from 'react';
import { DataProvider } from './api';
import './App.css';
import Current from './components/current/current';
import Details from './components/details/details';
import './components/current/current.css'
import './components/details/details.css'

function App() {
  
  return (
    <DataProvider>
      <Current />
      <Details />
    </DataProvider>
  );
}

export default App;