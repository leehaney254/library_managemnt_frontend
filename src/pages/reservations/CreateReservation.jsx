import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { fetchBooks } from '../../features/books/books';
import { fetchMembers } from '../../features/members/members';

const CreateReservation = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const books_data = useSelector((state) => state.books.books);
  const members_data = useSelector((state) => state.member.members);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchMembers());
  }, [dispatch])

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form>
          <div className="flex justify-between my-4">
            {books_data && <div className="flex flex-col">
              <label htmlFor="book_id">Select Book:</label>
              <select
                id="book_id"
                name='book_id'
                className="all_inputs"
              >
                <option value="">-- Select a book --</option>
                {/* Add options dynamically from your book data */}
                {
                  books_data.books.map((item) => {
                    return (
                      <option key={item.id} value={item.id} >{item.title}</option>
                    )
                  })
                }
              </select>
            </div>
            }

            {
              members_data && <div className="flex flex-col">
                <label htmlFor="member_id">Select Member:</label>
                <select
                  id="member_id"
                  name='member_id'
                  className="all_inputs"
                >
                  <option value="">-- Select a member --</option>
                  {/* Add options dynamically from your member data */}
                  {
                    members_data.members.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            }
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                id="cost"
                name='cost' className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="returned">Return Date:</label>
              <input
                type="date"
                id="returned"
                name='returned'
                className="all_inputs"
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