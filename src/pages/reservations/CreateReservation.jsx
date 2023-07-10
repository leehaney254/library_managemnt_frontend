import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

const CreateReservation = () => {

  const [selectedBook, setSelectedBook] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [cost, setCost] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleBookChange = (e) => {
    setSelectedBook(e.target.value);
  };

  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform desired action with form data
    // For example, submit the form to a server or update state

    // Reset the form
    setSelectedBook('');
    setSelectedMember('');
    setCost('');
    setReturnDate('');
  };

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="book">Select Book:</label>
              <select id="book" name='book' className="all_inputs" value={selectedBook} onChange={handleBookChange}>
                <option value="">-- Select a book --</option>
                {/* Add options dynamically from your book data */}
                <option value="book1">Book 1</option>
                <option value="book2">Book 2</option>
                <option value="book3">Book 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="member">Select Member:</label>
              <select id="member" name='member' className="all_inputs" value={selectedMember} onChange={handleMemberChange}>
                <option value="">-- Select a member --</option>
                {/* Add options dynamically from your member data */}
                <option value="member1">Member 1</option>
                <option value="member2">Member 2</option>
                <option value="member3">Member 3</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                name='cost' className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                name='return_date' className="all_inputs"
              />
            </div>
          </div>
          <button type="submit" className="bg-azure p-2 mt-4 rounded-md text-white">Create</button>
        </form>
      </div>
    </main>
  )
}

export default CreateReservation