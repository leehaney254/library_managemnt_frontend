import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import SwiperElement from '../../components/swiper/SwiperElement';

const books_data = {
  books: [
    {
      title: 'The 48 Laws of power',
      author: 'Robert Greene', 'genre': 'Personal Growth',
      publisher: 'Penguine Books', 'publication_date': '12/05/2004',
      description: 'A very good book',
      image: 'https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg',
      amount: 10,
    },
    {
      title: 'Art of Seduction', 'author': 'Robert Greene',
      genre: 'Personal Growth', 'publisher': 'Penguine Books',
      publication_date: '12/05/2004', 'description': 'A very good book',
      image: 'https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png',
      amount: 1,
    },
    {
      title: 'Who moved my cheese', 'author': 'Spencer Johnson',
      genre: 'Personal Growth', 'publisher': 'Penguine Books',
      publication_date: '8/09/1998',
      description: 'Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a \'Maze\' and look for \'Cheese\' to nourish them and make them happy.',
      image: 'https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg',
      amount: 5,
    },
    {
      title: 'The 48 Laws of power',
      author: 'Robert Greene', 'genre': 'Personal Growth',
      publisher: 'Penguine Books', 'publication_date': '12/05/2004',
      description: 'A very good book',
      image: 'https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg',
      amount: 10,
    },
    {
      title: 'Art of Seduction', 'author': 'Robert Greene',
      genre: 'Personal Growth', 'publisher': 'Penguine Books',
      publication_date: '12/05/2004', 'description': 'A very good book',
      image: 'https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png',
      amount: 1,
    },
    {
      title: 'Who moved my cheese', 'author': 'Spencer Johnson',
      genre: 'Personal Growth', 'publisher': 'Penguine Books',
      publication_date: '8/09/1998',
      description: 'Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a \'Maze\' and look for \'Cheese\' to nourish them and make them happy.',
      image: 'https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg',
      amount: 5,
    },
  ]
};

const AllBooks = () => {
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Book" button="Create Book" links="/books/create" />
        <div className="flex justify-between my-6">
          <input type="text" placeholder="Find by title" className="all_inputs" />
          <input type="text" placeholder="Find by Author" className="all_inputs" />
        </div>
        <div>
          <SwiperElement slider_data={books_data} />
        </div>
      </div>
    </main>
  )
}

export default AllBooks