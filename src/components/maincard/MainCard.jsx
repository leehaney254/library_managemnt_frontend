import React from 'react'
import { Link } from 'react-router-dom'

const MainCard = () => {
  return (
    <aside className="bg-indigo w-3/4">
      <div>
        <p>Add a book</p>
        <Link to='/books/create'>Create book</Link>
      </div>
      <div></div>
    </aside>
  )
}

export default MainCard