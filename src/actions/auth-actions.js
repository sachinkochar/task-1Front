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
