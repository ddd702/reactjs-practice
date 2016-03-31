import React,{Component,PropTypes} from 'react';
import CNCalendar from '../tools/CNCalendar';
var lunar=CNCalendar.solarToLunar(2016,3,28);
console.info(lunar);
function ddd(obj){
	console.warn(obj);
}
class CalCell extends Component{
	constructor(props){
		super(props);
	}
	showDetail(e){
		var data=this.props.data;
		ddd(data);
	}
	showClass(){
		var data=this.props.data;
		if (data.isNowDate) {
			return 'calander-cell calander-cell-now'
		}
		if (!data.isNowMonth) {
			return 'calander-cell calander-cell-other'
		}else{
			return 'calander-cell'
		}
	}
	getLunarDay(y,m,d){
		var lunar=CNCalendar.solarToLunar(y,m,d);
		if (lunar.lunarDay===1) {
			return lunar.lunarMonthName+lunar.lunarDayName;
		}
		return lunar.lunarDayName;
	}
	render(){
		var {data}=this.props;
		var _this=this;
		return(<td className={this.showClass()} onClick={function(e){_this.showDetail(e)}}>
			<p className="solar-cell">{data.date}</p>
			<p className="lunar-cell">{this.getLunarDay(data.year,data.month+1,data.date)}</p>
		</td>)
	}
}
export default CalCell;