import { render, screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router-dom';
import CartCounter from './CartCounter';

describe('CartCounter', () => {
  let useSelectorMock: jest.SpyInstance;
  let useNavigateMock: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();

    useSelectorMock = jest.spyOn(ReactRedux, 'useSelector');

    useNavigateMock = jest.spyOn(ReactRouter, 'useNavigate').mockReturnValue(jest.fn());
  });

  it('renders the cart with the correct total count', () => {
    useSelectorMock.mockReturnValue([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ]);

    render(<CartCounter />);

    expect(screen.getByText('5')).toBeTruthy();
    expect(screen.getByAltText('cart')).toBeTruthy();
  });

  it('navigates to /orders when the cart is clicked', () => {
    useSelectorMock.mockReturnValue([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ]);

    const mockNavigate = useNavigateMock.mockReturnValue(jest.fn());

    render(<CartCounter />);

    const cartDiv = screen.getByRole('button', { name: /cart/i });
    fireEvent.click(cartDiv);

    expect(mockNavigate).toHaveBeenCalledWith('/orders');
  });

  it('renders zero count when there are no orders', () => {
    useSelectorMock.mockReturnValue([]);

    render(<CartCounter />);

    expect(screen.getByText('0')).toBeTruthy();
    expect(screen.getByAltText('cart')).toBeTruthy();
  });
});
