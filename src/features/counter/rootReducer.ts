import authReducer from './authReducer'
import { combineReducers } from 'redux'
import productReducer from './productReducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer
});

export default rootReducer