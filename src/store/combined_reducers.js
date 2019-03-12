// ОБЪЕДИНЕНЕИЕ РЕДЮСЕРОВ
import { combineReducers } from "redux";
import check_tokens_reducer from './check_tokens/reducers';
import thunk from 'redux-thunk'; // это для асинхронной передачи данных


export default combineReducers ({check_tokens_reducer});