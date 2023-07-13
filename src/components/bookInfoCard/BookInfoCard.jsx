import React from 'react';
import PropTypes from 'prop-types';

const BookInfoCard = ({ book_data }) => {
  return (
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
  )
}

BookInfoCard.propTypes = {
  book_data: PropTypes.object.isRequired,
}

export default BookInfoCard