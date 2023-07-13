import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReservation } from '../../features/reservations/reservations';
import MemberInfoCard from '../../components/memberInfoCard/MemberInfoCard';
import BookInfoCard from '../../components/bookInfoCard/BookInfoCard';

const ReservationsInfo = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const reservations_data = useSelector((state) => state.reservation.payload.reservation);

  useEffect(() => {
    dispatch(fetchReservation(id))
  }, [dispatch, id])

  const updateHandler = () => {

  }

  const deleteHandler = () => {

  }

  return (
    <main>
      <Navbar />
      <aside className="main_content">
        {/* Display the book */}
        {reservations_data && <BookInfoCard book_data={reservations_data.book} />}
        {/* Display the member */}
        {reservations_data && <MemberInfoCard member_data={reservations_data.member} />}
        <div className='flex justify-end gap-4'>
          <button className="button_update" onClick={updateHandler}>Mark as Returned</button>
        </div>
      </aside>
    </main>
  )
}

export default ReservationsInfo