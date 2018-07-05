import { 
	getUserSuccess,
    getUserFailure,
    getUserProgress,
    authUserSuccess,
    authUserFailure,
    authUserProgress,
    authOutUserSuccess,
    authOutUserFailure,
    authOutUserProgress
  } from '../actions/auth-actions';

const initialState = {
	 users:{},
	 logged_in:false,
	 error:'',
	 progress:false
}
export default function userReducer(state = initialState, {type,payload}) {
	switch(type){
	 case getUserSuccess :
		return {
			...state,
			logged_in:true,
			users:payload,
			progress:false
		}
	 case getUserFailure :
		return {
			...state,
			logged_in:false,
			error:payload,
			progress:false
		}
	 case getUserProgress :
		return {
			...state,
			logged_in:false,
			progress:false
		}
	case authUserProgress :
		return {
			...state,
			fetched:false,
			logged_in:false,
			progress:true
		}
	 case authUserSuccess :
		return {
			...state,
			fetched:true,
			logged_in:true,
			users:payload,
			progress:false
		}
	 case authUserFailure :
		return {
			...state,
			fetched:false,
			logged_in:false,
			error:payload,
			progress:false
		}
	 case authOutUserProgress :
		return {
			...state,
			fetched:true,
			progress:true
		}
	 case authOutUserSuccess :
		return {
			...state,
			fetched:false,
			logged_in:false,
			users:{},
			progress:false
		}
	 case authOutUserFailure :
		return {
			...state,
			fetched:true,
			error:payload,
			progress:false
		}
	 default :
	    return state;
    }
}