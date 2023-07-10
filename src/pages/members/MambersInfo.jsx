import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const MambersInfo = () => {
  return (
    <main>
      <Navbar />
      <aside className="main_content">
        <div>
          <div className="flex justify-center">
            <img className="w-52 h-72 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Book title" />
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <h1> <span className="font-bold">Name:</span> Leehaney</h1>
                <p><span className="font-bold">Phone:</span> +254711223344</p>
              </div>
              <div className="flex justify-center">
                <p><span className="font-bold">Email:</span> leehaney@gmail.com</p>
              </div>
              <div className="flex justify-center">
                <p><span className="font-bold">Debt:</span> 50</p>
              </div>
            </div>
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

export default MambersInfo