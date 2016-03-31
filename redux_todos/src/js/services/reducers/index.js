import { combineReducers } from 'redux';
import {Add,Del,Complete} from '../actions';
import {todoArr} from '../_config';
var todoData=todoArr;
function ReducerTodo(state={listData:todoData},action){
	switch (action.type){
		case Add:return {listData:state.todoData.push(action.obj)};
		default:return state;
	}
}

export const ReducerRoot = combineReducers({
  ReducerTodo
 });