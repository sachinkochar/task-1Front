import axios from 'axios';
import { API_URL } from '../config/config'
export const saveSuccess = payload => ({
  type: saveSuccess,
  payload
});

export const saveFailure = payload => ({
  type: saveFailure,
  payload
});

export const saveProgress = payload => ({
  type: saveProgress,
  payload
});

export const saveForm = (data) => dispatch =>  {
   console.log(data)
   delete data.open;
   delete data.err_msg;
   delete data.message;
   console.log(data)  
   dispatch(saveProgress('in Progress'))
   let api_url = `${API_URL}api/save`;
   console.log(api_url)
   axios({
      method: 'post',
      url: api_url,
      data: data
    }).then((res)=>{
      if(res.status===200){
        return dispatch(saveSuccess(data))
      }else{
         return dispatch(saveFailure(res))
      }
    }).catch((err)=>{
         return dispatch(saveFailure(err))
    })
}
