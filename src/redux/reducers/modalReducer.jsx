import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalActions";

//state

const initialState = {
    isModalOpen: false,
    orderDetails: null,
};

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                isModalOpen: true,
                orderDetails: action.payload,
            };
        case HIDE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                orderDetails: null,
            };
        default:
            return state;
    }
}

export default modalReducer