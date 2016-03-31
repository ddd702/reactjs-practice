import React,{Component,PropTypes} from 'react';
import {ChangeYearAction,ChangeMonthAction,ResetYMAction,NextMonthAction,PrevMonthAction} from '../services/actions';
import D from '../tools/dialog.d/dialog.d';
import {Now} from '../services/_config';
class CalHeader extends Component{
	constructor(props){
		super(props);
		console.warn(this.props);
	}
	changeMonth(e,dispatch){
		var monthVal=parseInt(e.target.value);
		var {dispatch,year,month}=this.props;
		dispatch(ChangeMonthAction(monthVal),'m');
	}
	changeYear(dispatch){
		
		D.prompt({content:'填入年份',fnY:function(val){
			val=parseInt(val);
			//console.log(dispatch(ChangeYearAction(val)));
			dispatch(ChangeYearAction(val,'y'));
		}})
	}
	today(dispatch){
		dispatch(ResetYMAction({m:Now.month,y:Now.year},'ym'))
	}
	monthSelect(val,key){
		return (<option value={val} key={key}>{val+1}</option>);
	}
	render(){
		var {dispatch,year,month}=this.props;
		var monthArr=[0,1,2,3,4,5,6,7,8,9,10,11];
		return (<header className="calander-header">
            <div className="form-inline">
                <div className="form-group">
                    	
                        <span onClick={()=>dispatch(PrevMonthAction(1,'m'))} className="glyphicon glyphicon-chevron-left"></span>
                        
                        <div className="form-control" onClick={(e)=>this.changeYear(dispatch)}>{year}</div>
                        年
                        <select onChange={(e)=>{this.changeMonth(e,dispatch)}} className="form-control" value={month}>
                        	{monthArr.map(this.monthSelect)}
                        </select>
                        月
                       
                        <span onClick={()=>dispatch(NextMonthAction(1,'m'))} className="glyphicon glyphicon-chevron-right"></span>
                        <button style={{marginLeft:'20px'}} onClick={(e)=>this.today(dispatch)} className="btn btn-default">今天</button>
                    </div>
                </div>
        </header>)
	}
}
export {CalHeader}