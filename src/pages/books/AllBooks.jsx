import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
const AllBooks = () => {
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Book" button="Create Book" links="/books/create" />
        <div className="flex justify-between my-6">
          <input type="text" placeholder="Find by title" className="all_inputs" />
          <input type="text" placeholder="Find by Author" />
        </div>
      </div>
    </main>
  )
}

export default AllBooks