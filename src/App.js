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
    <main className="centered">
      <Head />
      <Current />
      <Details />
      <Forecast />
    </main>
  ) : (
    <main className="centered load">
      <svg className="container" viewBox="0 0 40 40" height="40" width="40" > 
        <circle className="track" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" /> 
        <circle className="car" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" /> 
      </svg>
      <p>Carregando...</p>
    </main>
  );
}

export default App;

