import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../features/reservations/reservations';
import Navbar from '../../components/navbar/Navbar';
import MainCard from '../../components/maincard/MainCard';
import SwiperElement from '../../components/swiper/SwiperElement';

const AllReservations = () => {

  const dispatch = useDispatch();

  const reservations_data = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchReservations());
  }, [dispatch])

  return (
    <main>
      <Navbar />
      <div className="main_content">
        <MainCard text="Add a Reservation" button="Create reservation" links="/reservations/create" />
        <div>
          {
            reservations_data && <SwiperElement slider_data={reservations_data} />
          }
        </div>
      </div>
    </main>
  )
}

export default AllReservations