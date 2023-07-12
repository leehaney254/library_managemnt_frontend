import * as yup from "yup";

const bookSchema = yup.object().shape({
  member_id: yup.string().required('Author is required'),
  book_id: yup.string().required('Description is required'),
  cost: yup.number().positive().integer('Please enter integers').required('Amount is requied'),
  return_date: yup.string().required('Return date is required'),
  returned: yup.boolean().required('Returned must be a boolean')
})

export default bookSchema;