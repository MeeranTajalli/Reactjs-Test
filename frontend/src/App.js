import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Alert from './components/Alert';
import CryptoTable from './components/CryptoTable';
import BuildPortfolio from './components/BuildPortfolio';
import Stats from './components/Stats';
import Help from './components/Help';
import Footer from './components/Footer';

function App() {
  const [showAlert, setShowAlert] = useState(true); // toggle to test

  return (
    <>
      <Navbar />
      <Alert show={showAlert} onClose={() => setShowAlert(false)} />
      <Hero />
      <CryptoTable />
      <BuildPortfolio />
      <Stats />
      <Help />
      <Footer />
    </>
  );
}

export default App;
