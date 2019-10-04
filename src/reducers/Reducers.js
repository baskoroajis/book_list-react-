import {combineReducers} from 'redux'
import {bookData} from '../reducers/BooklistReducer'

export default combineReducers({
    data : bookData
})