import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../utils/constants';
import { MenuItem } from '../utils/types';

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

interface MenuState {
  items: MenuItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch menu items';
      });
  },
});

export default menuSlice.reducer;
