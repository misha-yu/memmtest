// ОБЪЕДИНЕНЕИЕ РЕДЮСЕРОВ
import { combineReducers } from "redux";
import check_tokens_reducer from './check_tokens/reducers';


export default combineReducers ({check_tokens_reducer});