import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const BookInfo = () => {
  return (
    <main>
      <Navbar />
      <aside className="main_content">
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-72 object-cover" src="https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg" alt="Book title" />
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <h1> <span className="font-bold">Title:</span> Who moved my cheese</h1>
                <p><span className="font-bold">Author:</span> Spencer Johnson</p>
              </div>
              <div className="flex justify-center">
                <p><span className="font-bold">Publisher:</span> Penguine Books</p>
                <p><span className="font-bold">Publish date:</span> 8/09/1998</p>
              </div>
              <div className="flex justify-center">
                <p><span className="font-bold">Title:</span> Personal Growth</p>
                <p>Cost: 50</p>
              </div>
            </div>
            <p className="text-center">
              Who Moved My Cheese? is a simple parable that reveals profound truths.
              It is an amusing and enlightening story of four characters who live in a Maze
              and look for Cheese to nourish them and make them happy.
            </p>
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Link to="#" className="button_update">Update</Link>
          <Link to="#" className="button_delete">Delete</Link>
        </div>
      </aside>
    </main>
  )
}

export default BookInfo