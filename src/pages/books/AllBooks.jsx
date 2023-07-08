import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import Card from '../../components/card/Card';
const AllBooks = () => {
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Book" button="Create Book" links="/books/create" />
        <div className="flex justify-between my-6">
          <input type="text" placeholder="Find by title" className="all_inputs" />
          <input type="text" placeholder="Find by Author" />
        </div>
        <div>
          <Card
            image="https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg"
            item1="Title"
            item1Val="48 Laws of Power"
            item2="Cost"
            item2Val1={50}
          />
        </div>
      </div>
    </main>
  )
}

export default AllBooks