import React from 'react';
import { DataProvider } from './contexts/api';
import Header from './components/header/header';
import Current from './components/current/current'
import Details from './components/details/details';
import Forecast from './components/forecast/forecast';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Header />
      <Current />
      <Details />
      <Forecast />
    </DataProvider>
  );
}

export default App;