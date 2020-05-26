// Author:Waseem Mehboob
// ID: 18072
import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;