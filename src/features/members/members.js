import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../api/url';

const initialState = {
  loading: false,
  payload: {},
  error: '',
};

// Used to fetch all members
const fetchMembers = createAsyncThunk('books/fetchMembers', () => fetch(`${url}/members`)
  .then((res) => res.json())
  .then((data) => data));

//used to fetch a single member
const fetchMember = createAsyncThunk('books/fetchMember', (id) => fetch(`${url}/members/${id}`)
  .then((res) => res.json())
  .then((data) => data));

//used to create a member
const createMemberAction = createAsyncThunk('books/fetchMember', (values) => fetch(`${url}/members`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
})
  .then(response => {
    if (response.ok) {
      console.log('Member created successfully');
    } else {
      console.log('Error creating member');
    }
  }))

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMembers.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        members: action.payload,
        error: '',
      }))
      .addCase(fetchMembers.rejected, (state, action) => ({
        ...state,
        loading: false,
        members: [],
        error: action.error.message,
      }))
      .addCase(fetchMember.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMember.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        payload: action.payload,
        error: '',
      }))
      .addCase(fetchMember.rejected, (state, action) => ({
        ...state,
        loading: false,
        payload: null,
        error: action.error.message,
      }));
  },
});

export default membersSlice.reducer;
export { fetchMembers, fetchMember, createMemberAction };