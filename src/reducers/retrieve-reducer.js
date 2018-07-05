import { 
	retrieveSuccess,
    retrieveFailure,
    retrieveProgress
  } from '../actions/retrieve-action';

const initialState = {
	 data:[],
	 saved:false,
	 error:'',
	 progress:false
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case retrieveProgress :
		return {
			...state,
			saved:false,
			progress:true
		}
	 case retrieveSuccess :
		return {
			...state,
			saved:true,
			data:payload
		}
	 case retrieveFailure :
		return {
			...state,
			saved:false,
			error:payload
		}
	 default :
	    return state;
    }
}