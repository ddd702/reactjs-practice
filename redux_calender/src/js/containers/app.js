import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {CalHeader} from '../components/calHeader';
import {CalList} from '../components/calList';
const nowDate=new Date();
function init(state){
    return {
        year:state.ReducerCal.year,
        month:state.ReducerCal.month
    }
}


class App extends Component{
	constructor(props){
		super(props);
		this.state={year:this.props.year,month:this.props.month}
	}
	componentDidMount(){
		console.warn('amount');
	}
	render(){
		var {year,month,dispatch}=this.props;
		return (
			<div>
				<CalHeader dispatch={dispatch} year={year} month={month}/>
				<CalList dispatch={dispatch} year={year} month={month}/>
			</div>
		)
	}
}
App.PropTypes={
	year: PropTypes.number,
	month: PropTypes.number
}
export default connect(init)(App)
//export default App
