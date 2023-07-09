import React from 'react'
import Card from '../card/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const books_data = [
  {
    title: 'The 48 Laws of power',
    author: 'Robert Greene', 'genre': 'Personal Growth',
    publisher: 'Penguine Books', 'publication_date': '12/05/2004',
    description: 'A very good book',
    image: 'https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg',
    amount: 10,
  },
  {
    title: 'Art of Seduction', 'author': 'Robert Greene',
    genre: 'Personal Growth', 'publisher': 'Penguine Books',
    publication_date: '12/05/2004', 'description': 'A very good book',
    image: 'https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png',
    amount: 1,
  },
  {
    title: 'Who moved my cheese', 'author': 'Spencer Johnson',
    genre: 'Personal Growth', 'publisher': 'Penguine Books',
    publication_date: '8/09/1998',
    description: 'Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a \'Maze\' and look for \'Cheese\' to nourish them and make them happy.',
    image: 'https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg',
    amount: 5,
  },
  {
    title: 'The 48 Laws of power',
    author: 'Robert Greene', 'genre': 'Personal Growth',
    publisher: 'Penguine Books', 'publication_date': '12/05/2004',
    description: 'A very good book',
    image: 'https://miro.medium.com/v2/resize:fit:588/1*f0znhTHMsMTsq9q-m14VIg.jpeg',
    amount: 10,
  },
  {
    title: 'Art of Seduction', 'author': 'Robert Greene',
    genre: 'Personal Growth', 'publisher': 'Penguine Books',
    publication_date: '12/05/2004', 'description': 'A very good book',
    image: 'https://nuriakenya.com/wp-content/uploads/2021/01/The-Art-of-Seduction-NuriaKenya-1-600x750.png',
    amount: 1,
  },
  {
    title: 'Who moved my cheese', 'author': 'Spencer Johnson',
    genre: 'Personal Growth', 'publisher': 'Penguine Books',
    publication_date: '8/09/1998',
    description: 'Who Moved My Cheese? is a simple parable that reveals profound truths. It is an amusing and enlightening story of four characters who live in a \'Maze\' and look for \'Cheese\' to nourish them and make them happy.',
    image: 'https://skygarden.azureedge.net/media/products/1252785-df66b5b291b94f819198265f9abffa0f.jpg',
    amount: 5,
  },
]

const SwiperElement = () => {
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
          books_data.map((item, index) => {
            return (
              <Link to='#' key={index}>
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
      </Slider>
    </div >
  )
}

export default SwiperElement