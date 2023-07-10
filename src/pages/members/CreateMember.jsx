import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

const CreateMember = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [debt, setDebt] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform desired action with form data
    // For example, submit the form to a server or update state

    // Reset the form
    setName('');
    setEmail('');
    setDebt(0);
    setPhoneNumber('');
    setImage('');
  };

  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                className="all_inputs"
              />
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="debt">Debt:</label>
              <input
                type="number"
                id="debt"
                value={debt}
                onChange={(e) => setDebt(Number(e.target.value))}
                name='debt'
                className="all_inputs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name='phone_number'
                className="all_inputs"
              />
            </div>
          </div>
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
          <button type="submit" className="bg-azure p-2 mt-4 rounded-md">Create</button>
        </form>
      </div>
    </main>
  )
}

export default CreateMember