import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../api/url';

const initialState = {
  loading: false,
  payload: {},
  error: '',
};

// Used to fetch all books
const fetchBooks = createAsyncThunk('books/fetchBooks', () => fetch(`${url}/books`)
  .then((res) => res.json())
  .then((data) => data));

//used to fetch a single book
const fetchBook = createAsyncThunk('books/fetchBook', (id) => fetch(`${url}/books/${id}`)
  .then((res) => res.json())
  .then((data) => data));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        loading: false,
        books: [],
        error: action.error.message,
      }))
      .addCase(fetchBook.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        payload: action.payload,
        error: '',
      }))
      .addCase(fetchBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        payload: null,
        error: action.error.message,
      }));
  },
});

export default booksSlice.reducer;
export { fetchBooks, fetchBook };