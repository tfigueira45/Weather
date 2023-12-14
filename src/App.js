import React, { useContext, useEffect } from 'react';
import { WeatherContext } from './contexts/WeatherContext';
import Head from './components/Head/Head';
import Current from './components/Current/Current'
import Details from './components/Details/Details';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  const { data } = useContext(WeatherContext);

  useEffect(() => {
    if(data){ 
      let city = data.resolvedAddress.split(/,/)[0].replace(/\s/g, '');

      document.body.style.background = `
        url(https://source.unsplash.com/1600x900/?${city}) no-repeat top center/cover
      `; 
    }
  });

  return data ? (
    <main>
      <Head />
      <Current />
      <Details />
      <Forecast />
    </main>
  ) : (
    <main className="load">
      <span className="spinner"></span>
      <p>Carregando...</p>
    </main>
  );
}

export default App;

