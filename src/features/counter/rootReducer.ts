import authReducer from './authReducer'
import {combineReducers} from 'redux'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
});

export default rootReducer