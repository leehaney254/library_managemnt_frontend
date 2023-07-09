import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import SwiperElement from '../../components/swiper/SwiperElement';

const members_data = {
  members: [
    {
      name: 'Leehaney',
      debt: 500,
      email: 'leeahney@gmail.com',
      phone_number: '+254',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: 'Mike',
      debt: 200,
      email: 'mike@gmail.com',
      phone_number: '+254',
      image: 'https://images.unsplash.com/photo-1533108344127-a586d2b02479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'Sarah',
      debt: 0,
      email: 'sarah@gmail.com',
      phone_number: '+254',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    },
  ]
};

const AllMembers = () => {
  return (
    <main >
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Member" button="Create member" links="/members/create" />
        <div>
          <SwiperElement slider_data={members_data} />
        </div>
      </div>
    </main>
  )
}

export default AllMembers