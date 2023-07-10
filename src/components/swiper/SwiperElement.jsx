import React from 'react'
import Card from '../card/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SwiperElement = ({ slider_data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {
          slider_data.books && slider_data.books.map((item, index) => {
            return (
              <Link to={`/books/${index}`} key={index}>
                <Card
                  image={item.image}
                  item1="Title"
                  item1Val={item.title}
                  item2="Cost"
                  item2Val1={item.amount}
                />
              </Link>
            )
          })
        }
        {
          slider_data.members && slider_data.members.map((item, index) => {
            return (
              <Link to={`/members/${index}`} key={index}>
                <Card
                  image={item.image}
                  item1="Name"
                  item1Val={item.name}
                  item2="Debt"
                  item2Val1={item.debt}
                />
              </Link>
            )
          })
        }
        {
          slider_data.reservations && slider_data.reservations.map((item, index) => {
            return (
              <Link to={`/reservations/${index}`} key={index}>
                <Card
                  image={item.book.image}
                  item1="Title"
                  item1Val={item.book.title}
                  item2="Person"
                  item2Val1={item.member.name}
                />
              </Link>
            )
          })
        }
      </Slider>
    </div >
  )
}

SwiperElement.propTypes = {
  slider_data: PropTypes.object.isRequired,
}

export default SwiperElement