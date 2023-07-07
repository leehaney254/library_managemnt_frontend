import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';

// lazy loading to reduce load time
const AllBooks = lazy(() => import('./pages/books/AllBooks'));
const AllMembers = lazy(() => import('./pages/members/AllMembers'));
const AllReservations = lazy(() => import('./pages/reservations/AllReservations'));

import './App.css'

function App() {
  return (
    <Suspense fallback={
      <Loader />
    }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllBooks />} />
          <Route path='/members' element={<AllMembers />} />
          <Route path='/reservations' element={<AllReservations />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
