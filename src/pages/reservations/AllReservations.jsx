import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';

const AllReservations = () => {
  return (
    <main>
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Reservation" button="Create reservation" links="/reservations/create" />
      </div>
    </main>
  )
}

export default AllReservations