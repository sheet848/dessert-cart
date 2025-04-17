import { combineReducers } from "redux";
import cartReducer from './cartReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
})

export default rootReducer