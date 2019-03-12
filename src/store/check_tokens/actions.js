// Actions check_tokens

export const SetTokensList = (token) => { 
    return (dispatch) => {
      setTimeout(() => {
        dispatch({type: 'SET_TOKENS_LIST', payload:token});
      }, 2000);
    }
 }


// export const SetTokensList = (token) => { 
//   return {type: 'SET_TOKENS_LIST', payload:token}
// }