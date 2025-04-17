import { INCREMENT_ITEM, REMOVE_FROM_CART, CLEAR_CART, DECREMENT_ITEM } from "../actions/cartActions";

//the state

const initialState = {
    items: {},
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {

    case INCREMENT_ITEM: {
        const currentQty = state.items[action.payload] || 0;

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload]: currentQty + 1,
            }
        };
    }

    case DECREMENT_ITEM: {
        const itemName = action.payload;
        const currentQty = state.items[itemName] || 0;

        if (currentQty > 0) {
            const newQty = currentQty - 1;
            const updatedItems = { ...state.items };

            if (newQty > 0) {
                updatedItems[itemName] = newQty;
            } else {
                delete updatedItems[itemName];
            }

            return {
                ...state,
                items: updatedItems,
            }
        }

        return state;

    }

    case REMOVE_FROM_CART: {
        const { [action.payload]: _, ...restItems } = state.items;
        
        return {
            ...state,
            items: restItems,
        };
    }

    case CLEAR_CART: {
        return {
            ...state,
            items: {},
        };
    }

    default:
        return state;
  }
}

export default cartReducer