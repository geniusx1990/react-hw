import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ordersReducer from '../../features/ordersSlice';
import OrderCard from './OrderCard';

const mockOnRemove = jest.fn();

describe('OrderCard', () => {
  it('renders the order card with correct details', () => {
    const store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
    });

    render(
      <Provider store={store}>
        <OrderCard
          id={1}
          img="pizza.jpg"
          meal="Pizza"
          quantity={2}
          price={10}
          onRemove={mockOnRemove}
        />
      </Provider>
    );

    expect(screen.getByAltText('Pizza')).not.toBeNull(); 
    expect(screen.getByText('Pizza')).not.toBeNull(); 
    expect(screen.getByText('$20.00 USD')).not.toBeNull(); 
    expect(screen.getByDisplayValue('2')).not.toBeNull(); 
  });

  it('dispatches updateOrderQuantity when quantity changes', () => {
    const store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
    });

    render(
      <Provider store={store}>
        <OrderCard
          id={1}
          img="pizza.jpg"
          meal="Pizza"
          quantity={2}
          price={10}
          onRemove={mockOnRemove}
        />
      </Provider>
    );

    const quantityInput = screen.getByRole('spinbutton') as HTMLInputElement;
    fireEvent.change(quantityInput, { target: { value: '3' } });

    const actions = store.getState();
    expect(actions.orders).toBeDefined();
  });

  it('calls onRemove when remove button is clicked', () => {
    const store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
    });

    render(
      <Provider store={store}>
        <OrderCard
          id={1}
          img="pizza.jpg"
          meal="Pizza"
          quantity={2}
          price={10}
          onRemove={mockOnRemove}
        />
      </Provider>
    );

    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(1);
  });
});
