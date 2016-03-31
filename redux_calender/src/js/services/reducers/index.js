import { combineReducers } from 'redux';
import { ChangeYear,ResetYMAction,ResetYM,ChangeMonth, NextMonth, PrevMonth } from '../actions';
const nowDate = new Date();

function ReducerCal(state = { year: nowDate.getFullYear(), month: nowDate.getMonth() }, action) {
	var tempState = Object.assign({}, state);//克隆一个state对象，不可直接返回修改后的state
	if (action.cahngeProp==='m') {
		if (action.value>11||action.value<0) {
	        return state;
	    }
	}
    switch (action.type) {
    	case ResetYM:
    		console.log(action.value);
    		tempState.month=action.value.m;
    		tempState.year=action.value.y;
    		return tempState;
        case NextMonth:
        	if (state.month + action.value>11) {
        		tempState.month=state.month + action.value-12;
        		tempState.year=state.year+1;
        	}else{
        		tempState.month = state.month + action.value;
        	}
            return tempState;
        case PrevMonth:
        	if (state.month - action.value<0) {
        		tempState.month=11;
        		tempState.year=state.year<=0?state.year:state.year-1;
        	}else{
        		tempState.month = state.month - action.value;
        	}
            //tempState.month = state.month - action.value;
            return tempState;
        case ChangeYear:
            tempState.year = action.value;
            console.warn(action.value);
            return tempState;
        case ChangeMonth:
            tempState.month = action.value;
            return tempState;
        default:
            return state;
    }
}
export const ReducerRoot = combineReducers({
    ReducerCal
});
