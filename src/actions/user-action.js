import axios from 'axios';

export const getUserSuccess = payload => ({
  type: getUserSuccess,
  payload
});

export const getUserFailure = payload => ({
  type: getUserFailure,
  payload
});

export const getUserProgress = payload => ({
  type: getUserProgress,
  payload
});

export const getUsers = () => dispatch =>  {
    dispatch(getUserProgress('progress'))
    let user=localStorage.getItem("username")
    if(user!==null){
      return dispatch(getUserSuccess(user));
    }else{
      return dispatch(getUserFailure('No user found'));
    }
}
