import $ from '../../libs/jquery/2.1.4/jquery';
function makeActionCreator(type, ...argNames) { //自定义创建action的函数
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        })
        return action;
    }
};
/*
 * action 类型
 */
export const ChangeYear = 'ChangeYear';
export const ChangeMonth = 'ChangeMonth';
export const NextMonth='NextMonth';
export const PrevMonth='PrevMonth';
export const ResetYM='ResetYM';
export const ResetYMAction = makeActionCreator(ResetYM, 'value','changeProp');
export const NextMonthAction = makeActionCreator(NextMonth, 'value','changeProp');
export const PrevMonthAction = makeActionCreator(PrevMonth, 'value','changeProp');
export const ChangeYearAction = makeActionCreator(ChangeYear, 'value','changeProp');
export const ChangeMonthAction = makeActionCreator(ChangeMonth, 'value','changeProp');
export function SetReduceAsyn() {
    return (dispatch, getState) => {
            $.post('http://70read.com:8080/ajax/getArticleList', {
                cateid: -1,
                pageSize: 0,
                pageLength: 10
            }, function(data, textStatus, xhr) {
            	console.warn(data.rows[0][0]);
                dispatch(SetReduce(data.rows[0][0].allcount));
            });
}
};
//console.warn(SetAdd());
