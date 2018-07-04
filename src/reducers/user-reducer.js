import { 
	getUserSuccess,
    getUserFailure,
    getUserProgress
  } from '../actions/user-action';

const initialState = {
	 users:{},
	 fetched:false,
	 error:'',
	 progress:false
}
export default function userReducer(state = initialState, {type,payload}) {
	switch(type){
	 case getUserSuccess :
		return {
			...state,
			fetched:true,
			users:payload
		}
	 case getUserFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 case getUserProgress :
		return {
			...state,
			fetched:false,
			progress:true
		}
	 default :
	    return state;
    }
}