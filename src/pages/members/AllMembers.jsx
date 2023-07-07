import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';

const AllMembers = () => {
  return (
    <main >
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Member" button="Create member" links="/members/create" />
      </div>
    </main>
  )
}

export default AllMembers