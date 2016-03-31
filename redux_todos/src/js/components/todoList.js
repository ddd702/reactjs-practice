import React, { Component, PropTypes } from 'react';
import { TodoItm } from './todoItm';
import { SetAdd, SetDel, SetComplete } from '../services/actions/index';
class TodoList extends Component {
    constructor(props) {
        super(props);
        var { todoArr } = this.props;
        this.state = { todoArr: todoArr, allChecked: false };
    }
    handlerCompelete() {
    	var _this=this;
        console.log(this.props.todoArr);
        _this.cbParent(_this.getCheckedIndex(),'multiCompelete')
    }
    handlerAdd() {
        var _this = this;
        D.prompt({ fnY:(v)=>_this.cbParent({
        	name:v,
        	state:1
        },'add') });
    }
    shouldComponentUpdate(newProps,state){
    	return true;
    }
    getCheckedIndex(){
    	var selectTodo=[];
    	this.props.todoArr.map((itm,index)=>{
				if (itm.checked) {
					selectTodo.push(index);
				}
		});
		console.log(this.props.todoArr);
		return selectTodo;
    }
    handlerAllChecked() {
        var todoArrTemp = this.props.todoArr;
        var prevAllChecked = this.state.allChecked;
        todoArrTemp.map((itm, index) => {
            itm.checked = !prevAllChecked;
        });
        this.setState({ todoArr: todoArrTemp, allChecked: !prevAllChecked });

    }
    cbParent(obj, type = 'none') {
        console.log(obj);
        var todoArrTemp = this.props.todoArr;
        var allCheckedTemp = this.state.allChecked;
        var checkedNum = 0;
        var order = obj.order;
        switch (type) {
        	
        	case 'multiCompelete':
        		obj.map((itm,index)=>{
        			todoArrTemp[itm].state=2;
        		});break;
        	case 'compelete':
        		todoArrTemp[obj.order]=obj;
        		break;
        	case 'del':
        		//todoArrTemp = Object.assign({},this.props).todoArr
        		//todoArrTemp[obj.order]=obj;
        		todoArrTemp.splice(obj.order,1);
        		
        		console.info(todoArrTemp);
        		
        		break;
        	case 'add': 
	        	todoArrTemp.push({
	                checked: allCheckedTemp,
	                name: obj.name,
	                state: obj.state
	            });break;
        	default:
	            todoArrTemp[order] = obj;
	            todoArrTemp.map((itm, index) => {
	                if (itm.checked) { checkedNum++; }
	            });
	            allCheckedTemp = !!(checkedNum === todoArrTemp.length);
        }
        this.setState({ todoArr: todoArrTemp, allChecked: allCheckedTemp });
    }
    getItms(itm, index) {
        return <TodoItm cbParent = { this.cbParent.bind(this) }
        checked = { itm.checked }
        state = { itm.state }
        order = { index }
        key = { index } name={itm.name}>{ itm.name }< /TodoItm>
    }
    render() {
        var { todoArr } = this.props;
        var { allChecked } = this.state;
        return ( <div>
            <div className = "checkbox"
            style = {
                { marginLeft: '15px' } } >
            <label>
            <input onChange = { this.handlerAllChecked.bind(this) }
            checked = { allChecked }
            type = "checkbox" /> 全选 </label></div><ul>{ todoArr.map(this.getItms.bind(this)) }</ul>
            <div className = "btn-groups" >
	            <button onClick = { this.handlerAdd.bind(this) }
	            className = "btn btn-default"> 增加 </button><button onClick = { this.handlerCompelete.bind(this) }
	            className = "btn btn-success" > 完成 </button>
            </div>
           </div>
        )
    }
}
export { TodoList }
