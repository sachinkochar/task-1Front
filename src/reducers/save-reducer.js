import { 
	saveSuccess,
    saveFailure,
    saveProgress
  } from '../actions/save-actions';

const initialState = {
	 data:[],
	 saved:false,
	 error:false,
	 progress:false
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case saveProgress :
		return {
			...state,
			saved:false,
			progress:true,
			error:false
		}
	 case saveSuccess :
		return {
			...state,
			saved:true,
			data:[...state.data, payload],
			error:false
		}
	 case saveFailure :
		return {
			...state,
			saved:false,
			error:true
		}
	 default :
	    return state;
    }
}