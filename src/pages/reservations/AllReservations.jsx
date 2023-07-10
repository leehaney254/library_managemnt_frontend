import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import SwiperElement from '../../components/swiper/SwiperElement';

const reservation_data = {
  "reservations": [
    {
      "book": {
        "amount": 11,
        "author": "Robert Greene",
        "description": "A very good book",
        "genre": "Personal Growth",
        "id": 1,
        "image": "https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg",
        "publication_date": "12/05/2004",
        "publisher": "Penguine Books",
        "title": "The 48 Laws of power"
      },
      "cost": 100,
      "id": 1,
      "member": {
        "debt": 500,
        "email": "leeahney@gmail.com",
        "id": 1,
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "name": "Leehaney",
        "phone_number": "+254"
      },
      "return_date": "Thu, 13 Jul 2023 00:00:00 GMT",
      "returned": true
    },
    {
      "book": {
        "amount": 0,
        "author": "Robert Greene",
        "description": "A very good book",
        "genre": "Personal Growth",
        "id": 2,
        "image": "https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png",
        "publication_date": "12/05/2004",
        "publisher": "Penguine Books",
        "title": "Art of Seduction"
      },
      "cost": 200,
      "id": 2,
      "member": {
        "debt": 200,
        "email": "mike@gmail.com",
        "id": 2,
        "image": "https://images.unsplash.com/photo-1533108344127-a586d2b02479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        "name": "Mike",
        "phone_number": "+254"
      },
      "return_date": "Thu, 13 Jul 2023 00:00:00 GMT",
      "returned": false
    },
    {
      "book": {
        "amount": 5,
        "author": "Spencer Johnson",
        "description": "Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a 'Maze' and look for 'Cheese' to nourish them and make them happy.",
        "genre": "Personal Growth",
        "id": 3,
        "image": "https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg",
        "publication_date": "8/09/1998",
        "publisher": "Penguine Books",
        "title": "Who moved my cheese"
      },
      "cost": 400,
      "id": 3,
      "member": {
        "debt": 500,
        "email": "leeahney@gmail.com",
        "id": 1,
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "name": "Leehaney",
        "phone_number": "+254"
      },
      "return_date": "Fri, 07 Jul 2023 00:00:00 GMT",
      "returned": false
    },
    {
      "book": {
        "amount": 0,
        "author": "Robert Greene",
        "description": "A very good book",
        "genre": "Personal Growth",
        "id": 2,
        "image": "https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png",
        "publication_date": "12/05/2004",
        "publisher": "Penguine Books",
        "title": "Art of Seduction"
      },
      "cost": 100,
      "id": 5,
      "member": {
        "debt": 500,
        "email": "leeahney@gmail.com",
        "id": 1,
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "name": "Leehaney",
        "phone_number": "+254"
      },
      "return_date": "Thu, 13 Jul 2023 00:00:00 GMT",
      "returned": false
    }
  ]
}

const AllReservations = () => {
  return (
    <main>
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Reservation" button="Create reservation" links="/reservations/create" />
        <div>
          <SwiperElement slider_data={reservation_data} />
        </div>
      </div>
    </main>
  )
}

export default AllReservations