// Reducer check_tokens

var initialState =  { tokensList: [ 'token1', 'token2', 'token2']};

// Reducer - в зависимости от типа Action добавляет значение в State
export default function check_tokens_reducer_fn (state = initialState, action) {
  //console.log('REDUCER, action.type = '+action.type+' action.payload = '+action.payload+' ...state='+[...state]);
if (action.type === 'SET_TOKENS_LIST_FULFILLED'){ // Изначально это - SET_TOKENS_LIST, но это меняется с помощью 
  return {
    ...state,
    tokensList: [...state.tokensList,  action.payload]
  }
}
return state;
}