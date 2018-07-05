import userReducer from './user-reducer';
import saveReducer from './save-reducer';
import retrieveReducer from './retrieve-reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	user:userReducer,
	save:saveReducer,
	retrieve:retrieveReducer
});


export default reducers;