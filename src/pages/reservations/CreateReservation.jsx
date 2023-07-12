import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { fetchBooks } from '../../features/books/books';
import { fetchMembers } from '../../features/members/members';
import reservationSchema from '../../validations/reservationValidation';

const onSubmit = () => {
  console.log('Submitted');
}

const CreateReservation = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const books_data = useSelector((state) => state.books.books);
  const members_data = useSelector((state) => state.member.members);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchMembers());
  }, [dispatch])

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      member_id: "",
      book_id: "",
      cost: "",
      return_date: "",
      returned: false,
    },
    validationSchema: reservationSchema,
    onSubmit,
  })

  console.log(values);
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4">
            {books_data && <div className="flex flex-col">
              <label htmlFor="book_id">Select Book:</label>
              <select
                id="book_id"
                name='book_id'
                value={values.book_id}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.book_id && touched.book_id ? "input_error" : "all_inputs"}
                required
              >
                <option value="">-- Select a book --</option>
                {/* Add options dynamically from your book data */}
                {
                  books_data.books.map((item) => {
                    return (
                      <option key={item.id} value={item.id} >{item.title}</option>
                    )
                  })
                }
              </select>
              {errors.book_id && touched.book_id && <p className="error_text">{errors.book_id}</p>}
            </div>
            }

            {
              members_data && <div className="flex flex-col">
                <label htmlFor="member_id">Select Member:</label>
                <select
                  id="member_id"
                  name='member_id'
                  value={values.member_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.member_id && touched.member_id ? "input_error" : "all_inputs"}
                  required
                >
                  <option value="">-- Select a member --</option>
                  {/* Add options dynamically from your member data */}
                  {
                    members_data.members.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })
                  }
                </select>
                {errors.member_id && touched.member_id && <p className="error_text">{errors.member_id}</p>}
              </div>
            }
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                id="cost"
                name='cost'
                value={values.cost}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.cost && touched.cost ? "input_error" : "all_inputs"}
                required
              />
              {errors.cost && touched.cost && <p className="error_text">{errors.cost}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="return_date">Return Date:</label>
              <input
                type="date"
                id="return_date"
                name='return_date'
                value={values.return_date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.return_date && touched.return_date ? "input_error" : "all_inputs"}
                required
              />
              {errors.return_date && touched.return_date && <p className="error_text">{errors.return_date}</p>}
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-azure p-2 mt-4 rounded-md text-white">Create</button>
        </form>
      </div>
    </main>
  )
}

export default CreateReservation