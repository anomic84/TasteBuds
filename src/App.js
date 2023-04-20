import React, { useState } from 'react'
import { Admin, Listings, User, Event, Home } from './pages'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './app.css'

function App() {
  const [currentPage, setCurrentPage] = React.useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Profile") {
      return <Admin />;
    }
    if (currentPage === "Listings") {
      return <Listings />;
    }
    return <Event />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // APP
    <div className="w-screen h-screen">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      <main className="render-container">
        {renderPage()}
      </main>
      <Footer />
    </div >


  );
}

export default App;
