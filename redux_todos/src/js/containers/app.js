import {connect} from 'react-redux';
import {TodoList} from '../components/todoList';
import {SetAdd,SetDel,SetComplete} from '../services/actions/index';
import {todoArr} from '../services/_config';
import React,{Component,PropTypes} from 'react';
function init(state){
    return {
        count:state.ReducerCounter.count,
        behavior:state.ReducerCounter.type,
        setNum:state.ReducerCounter2.count
    }
}
class App extends Component{
	render(){
		return(
			<TodoList todoArr={todoArr}/>
		)
	}
}
//export default connect(init)(TodoList)
export default App