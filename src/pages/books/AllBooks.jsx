import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
const AllBooks = () => {
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard />
      </div>
    </main>
  )
}

export default AllBooks