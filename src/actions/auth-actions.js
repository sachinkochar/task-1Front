export const authUserSuccess = payload => ({
  type: authUserSuccess,
  payload
});

export const authUserFailure = payload => ({
  type: authUserFailure,
  payload
});

export const authUserProgress = payload => ({
  type: authUserProgress,
  payload
});

export const loginUsers = (users) => dispatch =>  {
    dispatch(authUserProgress('inprogress'));
    localStorage.setItem("username", users.name)
    localStorage.setItem("password", users.password)
    if(localStorage.getItem("username")!=='' && localStorage.getItem("password")!=='' ){
        return dispatch(authUserSuccess(users)); 
     }
    else{
      return dispatch(authUserFailure('err'));
    };
}

export const authOutUserSuccess = payload => ({
  type: authOutUserSuccess,
  payload
});

export const authOutUserFailure = payload => ({
  type: authOutUserFailure,
  payload
});

export const authOutUserProgress = payload => ({
  type: authOutUserProgress,
  payload
});

export const logOutUsers = () => dispatch =>  {
    dispatch(authOutUserProgress('inprogress'));
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    return dispatch(authOutUserSuccess()); 
}

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

