import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMember } from '../../features/members/members';
import Navbar from '../../components/navbar/Navbar'
import { Link, useParams } from 'react-router-dom'

const MambersInfo = () => {
  const dispatch = useDispatch();

  const member_data = useSelector((state) => state.member.payload.member);
  const { id } = useParams();

  useEffect(() => {
    //request for all books from backend
    dispatch(fetchMember(id));
  }, [dispatch, id]);

  return (
    <main>
      <Navbar />
      <aside className="main_content">
        {member_data &&
          <div>
            <div className="flex justify-center">
              <img className="w-52 h-72 object-cover rounded-full" src={member_data.image} alt={member_data.name} />
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center">
                  <h1> <span className="font-bold">Name:</span>{member_data.name}</h1>
                  <p><span className="font-bold">Phone:</span>{member_data.phone_number}</p>
                </div>
                <div className="flex justify-center">
                  <p><span className="font-bold">Email:</span> {member_data.email}</p>
                </div>
                <div className="flex justify-center">
                  <p><span className="font-bold">Debt:</span> {member_data.debt}</p>
                </div>
              </div>
            </div>
          </div>
        }
        <div className='flex justify-end gap-4'>
          <Link to={`/members/update/${id}`} className="button_update">Update</Link>
          <Link to="#" className="button_delete">Delete</Link>
        </div>
      </aside>
    </main>
  )
}

export default MambersInfo