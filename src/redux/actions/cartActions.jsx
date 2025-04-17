export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const incrementItem = (item) => ({
    type: INCREMENT_ITEM,
    payload: item,
});

export const decrementItem = (item) => ({
    type: DECREMENT_ITEM,
    payload: item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});