import React,{Component,PropTypes} from 'react';
import {SetAdd,SetDel,SetComplete} from '../services/actions/index';
class TodoItm extends Component{
	constructor(props){
		super(props);
        var {checked,order,name,state}=this.props;
		this.state={
            name:name,
            state:state,
            checked:checked,
            order:order
        }
	}
    componentDidMount(){
       console.warn('jiazai');
    }
    componentWillReceiveProps(newProps){
        var {checked,order,name,state}=newProps;
        this.state={
            name:name,
            state:state,
            checked:checked,
            order:order
        }
    }
    shouldComponentUpdate(newProps,state){
      console.log(state!==this.state);
      return newProps.checked !== this.props.checked||newProps.name!==this.props.name||newProps.state!==this.props.state;
       // return true;
    }
    handlerDel(){

        this.setState({},()=>this.props.cbParent(this.state,'del'));
    }
    handlerCompelete(){
        var newState=this.state.state===1?2:1;
        this.setState({state:newState},()=>this.props.cbParent(this.state,'compelete'));
    }
    handlerChecked(e){
        //console.warn(e.target.checked);
        var prevChecked=e.target.checked;
        this.setState({checked:prevChecked},()=>this.props.cbParent(this.state));
    }
    stateStyle(state){
        if(state===2){
            return 'del'
        }else{
            return ''
        }
    }
	render(){
        var {state}=this.state;
		var {dispatch,children,checked}=this.props;
		return (<li className="list-group-item">
                <div className="checkbox">
                    <label>
                        <input ref="check" onChange={this.handlerChecked.bind(this)} checked={checked} type="checkbox"/>
                    </label>
                </div>
                <span className={this.stateStyle(state)}>{children}---{new Date().getTime()}</span>
                <div className="pull-right btns">
                    <button onClick={(e)=>{this.handlerDel()}} className="btn btn-danger">删除</button>
                    <button onClick={(e)=>{this.handlerCompelete()}} className="btn btn-success">完成{state}</button>
                </div>
            </li>)
	}
}
export {TodoItm}