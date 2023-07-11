import React from 'react';
import { useFormik } from 'formik';
import Navbar from '../../components/navbar/Navbar';
import bookSchema from '../../validations/bookValidation';

const CreateBook = () => {

  const onSubmit = () => {
    console.log("Submitted");
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      amount: 0,
      author: "",
      description: "",
      genre: "",
      image: "",
      publication_date: "",
      publisher: "",
      title: "",
    },
    validationSchema: bookSchema,
    onSubmit,
  })

  console.log(errors)
  return (
    <main className="flex relative">
      <Navbar />
      <div className="main_content">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.title && touched.title ? "input_error" : "all_inputs"}
                required
              />
              {errors.title && touched.title && <p className="error_text">{errors.title}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name='genre'
                className={errors.genre && touched.genre ? "input_error" : "all_inputs"}
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.genre && touched.genre && <p className="error_text">{errors.genre}</p>}
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="publicationDate">Publication Date:</label>
              <input
                type="date"
                id="publicationDate"
                name='publication_date'
                className={errors.publication_date && touched.publication_date ? "input_error" : "all_inputs"}
                value={values.publication_date}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.publication_date && touched.publication_date && <p className="error_text">{errors.publication_date}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                name='amount'
                className={errors.amount && touched.amount ? "input_error" : "all_inputs"}
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.amount && touched.amount && <p className="error_text">{errors.amount}</p>}
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="flex flex-col">
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                id="image"
                name='image'
                className={errors.image && touched.image ? "input_error" : "all_inputs"}
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.image && touched.image && <p className="error_text">{errors.image}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name='description'
                className={errors.description && touched.description ? "input_error" : "all_inputs"}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.description && touched.description && <p className="error_text">{errors.description}</p>}
            </div>
          </div>

          <button type="submit" className="bg-azure p-2 mt-4 rounded-md text-white">Create</button>
        </form>
      </div>
    </main >
  )
}

export default CreateBook