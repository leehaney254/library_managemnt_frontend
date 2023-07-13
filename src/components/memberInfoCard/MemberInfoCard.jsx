import React from 'react';
import PropTypes from 'prop-types';

const MemberInfoCard = ({ member_data }) => {
  return (
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
  )
}

MemberInfoCard.propTypes = {
  member_data: PropTypes.object.isRequired,
}

export default MemberInfoCard