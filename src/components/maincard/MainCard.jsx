import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './mainCard.css'

const MainCard = ({ text, button }) => {
  return (
    <aside className="bg-indigo maincard">
      <div>
        <p className="text-4xl mb-4">{text}</p>
        <Link className="mainbutton" to='/books/create'>{button}</Link>
      </div>
      <div></div>
    </aside>
  )
}

MainCard.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
}

export default MainCard