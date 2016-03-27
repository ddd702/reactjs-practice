import { combineReducers } from 'redux';
import {Num, Add,Reduce,SetAdd,SetReduce} from '../actions';
function ReducerCounter(state={count:0,type:'none'},action){
	switch (action.type){
		case Add:return {count:state.count+action.index,type:'add'};
		case Reduce:return {count:state.count-action.index,type:'reduce'};
		case Num:return {count:action.num,type:'num'};
		default:return state;
	}
}
function ReducerCounter2(state={count:0,type:'none'},action){
	switch (action.type){
		case Num:return {count:action.num,type:'num'};
		default:return state;
	}
}
export const ReducerRoot = combineReducers({
   ReducerCounter,
   ReducerCounter2
 });