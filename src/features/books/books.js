import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../api/url';

const initialState = {
  loading: false,
  payload: {},
  error: '',
};

const fetchBooks = createAsyncThunk('books/fetchBooks', () => fetch(`${url}/books`)
  .then((res) => res.json())
  .then((data) => data));


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchBooks.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        payload: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchBooks.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        payload: [],
        error: action.error.message,
      }
    ));
  },
});

export default booksSlice.reducer;
export { fetchBooks };