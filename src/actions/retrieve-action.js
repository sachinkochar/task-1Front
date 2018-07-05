import axios from 'axios';
import { API_URL } from '../config/config'
export const retrieveSuccess = payload => ({
  type: retrieveSuccess,
  payload
});

export const retrieveFailure = payload => ({
  type: retrieveFailure,
  payload
});

export const retrieveProgress = payload => ({
  type: retrieveProgress,
  payload
});

export const getForm = (data) => dispatch =>  {
   console.log(data)
   dispatch(retrieveProgress('in Progress'))
   let api_url = `${API_URL}api/`;
   console.log(api_url)
   axios({
        method: 'get',
        url: api_url
      }).then((res)=>{
      if(res.status===200){
        console.log(res)
        return dispatch(retrieveSuccess(res.data))
      }else{
        return dispatch(retrieveFailure(res))
      }
      }).catch((err)=>{
          console.log(err)
          return dispatch(retrieveFailure(err))

      })
}
