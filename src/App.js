import React, { useContext } from 'react';
import { DataContext } from './contexts/Context';
import Head from './components/Head/Head';
import Current from './components/Current/Current'
import Details from './components/Details/Details';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  const { data } = useContext(DataContext)
  return data ? (
    <>
      <Head />
      <Current />
      <Details />
      <Forecast />
    </>
  ) : (
    <>
      <span className="spinner"></span>
      <p>Carregando...</p>
    </>
  );
}

export default App;