import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const Pagination = ({ display }) => {
  // Handle number of cards according to screen size
  const [screenSize, setScreenSize] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setItemsPerPage(1)
    } else {
      setItemsPerPage(3);
    }
  }, [screenSize]);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  let items = [];

  if (display.books) {
    items = display.books;
  } else if (display.members) {
    items = display.members;
  } else if (display.reservations) {
    items = display.reservations;
  }

  // Simulate fetching items from another resources.\
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-around my-4">
        {!currentItems.length && <p>Wow! Such Emptiness</p>}
        {display.books && currentItems.map((item) => {
          return (
            <Link to={`/books/${item.id}`} key={item.id}>
              <Card
                image={item.image}
                item1="Title"
                item1Val={item.title}
                item2="Count"
                item2Val1={item.amount}
              />
            </Link>
          )
        })
        }
        {
          display.members && currentItems.map((item) => {
            return (
              <Link to={`/members/${item.id}`} key={item.id}>
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
          display.reservations && currentItems.map((item) => {
            return (
              <Link to={`/reservations/${item.id}`} key={item.id}>
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
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={itemsPerPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

Pagination.propTypes = {
  display: PropTypes.object.isRequired,
}

export default Pagination