import React from 'react'
import { Link } from 'react-router-dom'
import './mainCard.css'

const MainCard = () => {
  return (
    <aside className="bg-indigo maincard">
      <div>
        <p className="text-4xl mb-4">Add a book</p>
        <Link className="mainbutton" to='/books/create'>Create book</Link>
      </div>
      <div></div>
    </aside>
  )
}

export default MainCard