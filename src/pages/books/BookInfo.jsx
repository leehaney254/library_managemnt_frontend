import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { fetchBook, deleteBook } from '../../features/books/books';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book_data = useSelector((state) => state.books.payload.book);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    dispatch(deleteBook(id));

    //Redirect to books
    navigate(`/`);

    //reload destination page
    window.location.reload();

    //display toast message
    toast.success('Book deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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
          <Link to={`/books/update/${id}`} className="button_update">Update</Link>
          <button className="button_delete" onClick={deleteHandler}>Delete</button>
        </div>
      </aside>
    </main >
  )
}

export default BookInfo