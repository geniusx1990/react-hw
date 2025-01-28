import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from '../utils/types';

interface OrderItem extends MenuItem {
  quantity: number;
}

interface OrdersState {
  items: OrderItem[];
}

const initialState: OrdersState = {
  items: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<OrderItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromOrder: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateOrderQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
        const item = state.items.find(item => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      },
    clearOrder: (state) => {
      state.items = [];
    },
  },
});

export const { addToOrder, removeFromOrder, updateOrderQuantity, clearOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
