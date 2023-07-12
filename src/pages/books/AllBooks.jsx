import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../features/books/books';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import SwiperElement from '../../components/swiper/SwiperElement';
import Pagination from '../../components/pagination/Pagination';

const AllBooks = () => {
  const dispatch = useDispatch();
  const { searchTitle, updateSearchTitle } = useState('');
  const { searchAuthor, updateSearchAuthor } = useState('');

  let books_data = useSelector((state) => state.books.books);

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBooks());
  }, [dispatch])

  // Get the value from the first search input
  const titleChangeHandler = (event) => {
    // set the first search input as empty
    updateSearchAuthor('')

    updateSearchTitle(event.target.value.trim());
  }

  // Get the value from the second search input
  const authorChangeHandler = (event) => {
    //set the second search input as empty
    updateSearchTitle('')

    updateSearchAuthor(event.target.value.trim());
  }

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Book" button="Create Book" links="/books/create" />
        <div className="flex justify-between my-6">
          <input
            type="text"
            placeholder="Find by title"
            className="all_inputs"
            value={searchTitle}
            onChange={titleChangeHandler}
          />
          <input
            type="text"
            placeholder="Find by Author"
            className="all_inputs"
            value={searchAuthor}
            onChange={authorChangeHandler}
          />
        </div>
        <div>
          {/* We only display when there is data from backend */}
          {books_data && <Pagination display={books_data} />}
        </div>
      </div>
    </main>
  )
}

export default AllBooks