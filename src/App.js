import React, { useContext } from 'react';
import { DataContext } from './contexts/api';
import Header from './components/header/header';
import Current from './components/current/current'
import Details from './components/details/details';
import Forecast from './components/forecast/forecast';
import './App.css';

function App() {
  const data = useContext(DataContext)
  return data ? (
    <>
      <Header />
      <Current />
      <Details />
      <Forecast />
    </>
  ) : (
    <>
      <span className="spinner"></span>
      <p className="load">Carregando...</p>
    </>
  );
}

export default App;