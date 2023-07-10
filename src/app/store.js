import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/books';

// we create a redux store
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})