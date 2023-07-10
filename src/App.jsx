import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';

// lazy loading to reduce load time
const AllBooks = lazy(() => import('./pages/books/AllBooks'));
const AllMembers = lazy(() => import('./pages/members/AllMembers'));
const AllReservations = lazy(() => import('./pages/reservations/AllReservations'));
const BookInfo = lazy(() => import('./pages/books/BookInfo'));
const MambersInfo = lazy(() => import('./pages/members/MambersInfo'));
const CreateBook = lazy(() => import('./pages/books/CreateBook'));
const CreateMember = lazy(() => import('./pages/members/CreateMember'));
const CreateReservation = lazy(() => import('./pages/reservations/CreateReservation'));

import './App.css'

function App() {
  return (
    <Suspense fallback={
      <Loader />
    }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllBooks />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/:id' element={<BookInfo />} />
          <Route path='/members' element={<AllMembers />} />
          <Route path='/members/create' element={<CreateMember />} />
          <Route path='/members/:id' element={<MambersInfo />} />
          <Route path='/reservations' element={<AllReservations />} />
          <Route path='/reservations/create' element={<CreateReservation />} />
          <Route path='/reservations/:id' element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
