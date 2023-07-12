import * as yup from "yup";

const bookSchema = yup.object().shape({
  author: yup.string().required('Author is required'),
  description: yup.string().required('Description is required'),
  cost: yup.number().positive().integer('Please enter integers').required('Amount is requied'),
  return_date: yup.string().required('Publication date is required'),
})

export default bookSchema;