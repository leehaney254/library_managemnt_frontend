import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { fetchBook } from '../../features/books/books';

const BookInfo = () => {

  const dispatch = useDispatch();
  const book_data = useSelector((state) => state.books.payload.book);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <main>
      <Navbar />
      <aside className="main_content">
        {/* We only display if there is data from backend */}
        {book_data &&
          <div>
            <div className="flex justify-center">
              <img className="w-52 h-72 object-cover" src={book_data.image} alt={book_data.title} />
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <h1> <span className="font-bold">Title:</span>{book_data.title}</h1>
                  <p><span className="font-bold">Author:</span>{book_data.author}</p>
                </div>
                <div className="flex justify-center">
                  <p><span className="font-bold">Publisher:</span>{book_data.publisher}</p>
                  <p><span className="font-bold">Publish date:</span> {book_data.publication_date}</p>
                </div>
                <div className="flex justify-center">
                  <p><span className="font-bold">Genre:</span> {book_data.genre}</p>
                  <p><span className="font-bold">Count:</span>{book_data.amount}</p>
                </div>
              </div>
              <p className="text-center">
                {book_data.description}
              </p>
            </div>
          </div>
        }
        <div className='flex justify-end gap-4'>
          <Link to="#" className="button_update">Update</Link>
          <Link to="#" className="button_delete">Delete</Link>
        </div>
      </aside>
    </main>
  )
}

export default BookInfo