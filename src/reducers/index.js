import userReducer from './user-reducer';
import authReducer from './auth-reducer';
import saveReducer from './save-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	auth:authReducer,
	user:userReducer,
	save:saveReducer
});


export default reducers;