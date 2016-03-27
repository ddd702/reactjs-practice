import React,{Component,PropTypes} from 'react';
import {SetAdd,SetReduce,SetNum,Add,Reduce,SetReduceAsyn} from '../services/actions/index';
class Counter extends Component{
	constructor(props){
		super(props);
		console.warn(this.props);
		this.state={
			addRange:1,
			reduceRange:1
		}
	}
	setRange(e,type){
		const val=isNaN(parseInt(e.target.value))?1:parseInt(e.target.value);
		console.log(val);
		if (type===Reduce) {
			this.setState({'reduceRange':val});
		}else{
			this.setState({'addRange':val});
		}
		
	}
	render(){
		var {dispatch,count,behavior,setNum}=this.props;
		var {addRange,reduceRange}=this.state;
		return ( <div className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <a onClick={()=>dispatch(SetReduce(reduceRange))} href="javascript:void(0)" className="input-group-addon">减</a>
                            <div type="text" className="form-control" id="exampleInputAmount">{count}</div>
                            <a onClick={()=>{dispatch(SetAdd(addRange));console.warn(this.props);}} href="javascript:void(0)" className="input-group-addon">加</a>
                        </div>
                        <p>you behavior is {behavior}</p>
                        
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <a href="javascript:void(0)" className="input-group-addon">增加幅度</a>
                            <input onChange={(e)=>this.setRange(e,Add)} type="text" defaultValue={addRange} className="form-control" id="exampleInputAmount"/>
                        	
                        </div>
                        <p>增加幅度{addRange}</p>
                        <div className="input-group">
                            <a href="javascript:void(0)" className="input-group-addon">递减幅度</a>
                            <input onChange={(e)=>this.setRange(e,Reduce)} type="text" defaultValue={reduceRange} className="form-control" id="exampleInputAmount"/>
                        	
                        </div>
                        <p>增加幅度{reduceRange}</p>
                   
                        
                    </div>
                    <button className="btn btn-default" onClick={()=>dispatch(SetNum(setNum))}>初始值</button>
                    <button style={{marginLeft:'10px'}} className="btn btn-default" onClick={()=>dispatch(SetReduceAsyn())}>异步</button>
        </div>)
	}
}
export {Counter}