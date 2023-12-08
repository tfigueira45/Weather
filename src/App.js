import React, { useContext, useEffect } from 'react';
import { DataContext } from './contexts/Context';
import Head from './components/Head/Head';
import Current from './components/Current/Current'
import Details from './components/Details/Details';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if(data){ 
      document.body.style.backgroundImage = `
        url(https://source.unsplash.com/1600x900/?${data.resolvedAddress.split(/,/)[0]}
      `;
      console.log(document.body.style.backgroundImage)
    }
  }, [data]);

  return data ? (
    <main>
      <Head />
      <Current />
      <Details />
      <Forecast />
    </main>
  ) : (
    <>
      <span className="spinner"></span>
      <p>Carregando...</p>
    </>
  );
}

export default App;

