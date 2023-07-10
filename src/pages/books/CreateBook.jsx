import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

const CreateBook = () => {

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform desired action with form data
    // For example, submit the form to a server or update state

    // Reset the form
    setTitle('');
    setGenre('');
    setPublicationDate('');
    setDescription('');
    setImage('');
    setAmount('');
  };

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name='title'
                className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                name='genre'
                className="all_inputs"
              />
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="publicationDate">Publication Date:</label>
              <input
                type="date"
                id="publicationDate"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
                name='publication_date'
                className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name='amount'
                className="all_inputs"
              />
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                name='image'
                className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name='description'
                className="all_inputs"
              />
            </div>
          </div>

          <button type="submit" className="bg-azure p-2 mt-4 rounded-md">Create</button>
        </form>
      </div>
    </main >
  )
}

export default CreateBook