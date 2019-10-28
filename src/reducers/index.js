import { combineReducers } from 'redux';
import currensyReducer from './currensyReducer';

export default combineReducers({
    currency: currensyReducer
});