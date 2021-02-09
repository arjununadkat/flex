import authReducer from './authReducer'
import { combineReducers } from 'redux'
import productReducer from './productReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer