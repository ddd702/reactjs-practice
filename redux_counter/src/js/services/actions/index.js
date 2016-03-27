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
export const Add = 'Add';
export const Reduce = 'Reduce';
export const Num = 'Num';
export const SetNum = makeActionCreator(Num, 'num');
export const SetAdd = makeActionCreator(Add, 'index');
export const SetReduce = makeActionCreator(Reduce, 'index');
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
