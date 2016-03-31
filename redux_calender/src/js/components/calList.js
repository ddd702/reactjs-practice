import React,{Component,PropTypes} from 'react';
import CalCell from './calCell';
import { Now } from '../services/_config';
class CalList extends Component{
	constructor(props){
		super(props);
	}
    getCalArr(){
        var {month,year}=this.props;
        var firstDay=new Date(year,month,1).getDay();
        var lastDay=new Date(year,month+1,0).getDay();
        var lastDate=new Date(year,month+1,0).getDate();
        var hasDay=new Date(year,month+1,0).getDate();
        var prevMonthLastDate=new Date(year,month,0).getDate();
        var calArr=[];
        var outCalArr=[];
        console.warn('本月有天数%s,第一天是周%s,最后一天是周%s',hasDay,firstDay,lastDay);
        for(let i=firstDay;i>0;i--){
            let thisDate=new Date(year,month-1,prevMonthLastDate-(i-1));
            calArr.push({timeStamp:thisDate.getTime(),
                year:thisDate.getFullYear(),
                month:thisDate.getMonth(),
                date:thisDate.getDate(),
                day:thisDate.getDay(),
                isNowMonth:false,
                isNowDate:false
            });
        }
        for(let i=1;i<=lastDate;i++){
            let thisDate=new Date(year,month,i);
            let isNowDateBool=false;
            if (thisDate.getTime()===new Date(Now.year,Now.month,Now.date).getTime()) {
                isNowDateBool=true;
            }
            calArr.push({timeStamp:thisDate.getTime(),
                year:thisDate.getFullYear(),
                month:thisDate.getMonth(),
                date:thisDate.getDate(),
                day:thisDate.getDay(),
                isNowMonth:true,
                isNowDate:isNowDateBool
            });
        }
        if (!!calArr.length%7) {
            for(let i=1;i<=calArr.length%7;i++){
                let thisDate=new Date(year,month+1,i);
                calArr.push({timeStamp:thisDate.getTime(),
                    year:thisDate.getFullYear(),
                    month:thisDate.getMonth(),
                    date:thisDate.getDate(),
                    day:thisDate.getDay(),
                    isNowMonth:false
                });
            }
        }
        calArr.map((itm,index)=>{
            if(index%7===0&&index!==0){
                outCalArr.push(calArr.slice(index-7,index));
            }else if(index===calArr.length-1){
                outCalArr.push(calArr.slice(index-6,index+1));
            }
        });
        return outCalArr;
        
    }
    getCalRow(arr,key){
        function getCalCell(obj,key){
            return (<CalCell key={key} data={obj}/>)
        }
        var _this=this;
        return(<tr className="calander-row" key={key}>{arr.map(getCalCell)}</tr>)
    }
    getCalCon(){
        let arrRow=this.getCalArr();
        var _this=this;
        return (<tbody>{arrRow.map(this.getCalRow)}</tbody>);
    }
	render(){
		return (
			<table className="calander-wrap">
            <thead>
                <tr className="calander-row">
                    <th className="calander-cell">
                        周日
                    </th>
                    <th className="calander-cell">
                        周一
                    </th>
                    <th className="calander-cell">
                        周二
                    </th>
                    <th className="calander-cell">
                        周三
                    </th>
                    <th className="calander-cell">
                        周四
                    </th>
                    <th className="calander-cell">
                        周五
                    </th>
                    <th className="calander-cell">
                        周六
                    </th>
                </tr>
            </thead>
            {this.getCalCon()} 
        </table>
		)
	}
}
export {CalList}