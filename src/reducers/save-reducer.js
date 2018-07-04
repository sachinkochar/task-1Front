import { 
	saveSuccess,
    saveFailure,
    saveProgress
  } from '../actions/save-actions';

const initialState = {
	 data:{},
	 saved:false,
	 error:'',
	 progress:false
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case saveProgress :
		return {
			...state,
			fetched:false,
			progress:true
		}
	 case saveSuccess :
		return {
			...state,
			fetched:true,
			data:payload
		}
	 case saveFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}