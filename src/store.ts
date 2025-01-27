import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import ordersReducer from './features/ordersSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    orders: ordersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;