import { 
	authUserSuccess,
    authUserFailure,
    authUserProgress,
    authOutUserSuccess,
    authOutUserFailure,
    authOutUserProgress
  } from '../actions/auth-actions';

const initialState = {
	 users:{},
	 fetched:false,
	 error:'',
	 progress:false,
	 logIn:false
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case authUserProgress :
		return {
			...state,
			fetched:false,
			logIn:false,
			progress:true
		}
	 case authUserSuccess :
		return {
			...state,
			fetched:true,
			logIn:true,
			users:payload,
			progress:false
		}
	 case authUserFailure :
		return {
			...state,
			fetched:false,
			logIn:false,
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
			logIn:false,
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