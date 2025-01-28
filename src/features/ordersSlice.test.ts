import ordersReducer, {
    addToOrder,
    removeFromOrder,
    updateOrderQuantity,
    clearOrder,
  } from './ordersSlice';
  
  describe('ordersSlice', () => {
    const initialState = { items: [] };
  
    it('should handle initial state', () => {
      expect(ordersReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
    });
  
    it('should handle adding items to the order', () => {
      const item = { id: 1, meal: 'Pizza', price: 10, instructions: '', img: '', category: '', quantity: 1 };
      const state = ordersReducer(initialState, addToOrder(item));
      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual(item);
    });
  
    it('should update item quantity in the order', () => {
      const item = { id: 1, meal: 'Pizza', price: 10, instructions: '', img: '', category: '', quantity: 1 };
      const stateWithItem = ordersReducer({ items: [item] }, updateOrderQuantity({ id: 1, quantity: 3 }));
      expect(stateWithItem.items[0].quantity).toBe(3);
    });
  
    it('should handle removing items from the order', () => {
      const item = { id: 1, meal: 'Pizza', price: 10, instructions: '', img: '', category: '', quantity: 1 };
      const stateWithItem = { items: [item] };
      const state = ordersReducer(stateWithItem, removeFromOrder(1));
      expect(state.items).toHaveLength(0);
    });
  
    it('should handle clearing the order', () => {
      const item = { id: 1, meal: 'Pizza', price: 10, instructions: '', img: '', category: '', quantity: 1 };
      const stateWithItem = { items: [item] };
      const state = ordersReducer(stateWithItem, clearOrder());
      expect(state.items).toHaveLength(0);
    });
  });
  