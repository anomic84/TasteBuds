import React, { useState } from 'react'
import { Admin, Listings, User, Event, Home } from './pages'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [currentPage, setCurrentPage] = React.useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Admin") {
      return <Admin />;
    }
    if (currentPage === "Listings") {
      return <Listings />;
    }
    if (currentPage === "User") {
      return <User />;
    }
    return <Event />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // APP
    <div className='w-screen h-screen '>
      <div className='maingradient h-[100%]'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

        <main className='flex w-full'>
          {renderPage()}
        </main>
      </div >
      <Footer />
    </div >
  );
}

export default App;
