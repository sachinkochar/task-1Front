import { 
	authUserSuccess,
    authUserFailure,
    authUserProgress
  } from '../actions/auth-actions';

const initialState = {
	 users:{},
	 fetched:false,
	 error:'',
	 progress:false
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case authUserProgress :
		return {
			...state,
			fetched:false,
			progress:true
		}
	 case authUserSuccess :
		return {
			...state,
			fetched:true,
			users:payload
		}
	 case authUserFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}