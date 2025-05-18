import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings/>
    </>
  )
}

export default App
