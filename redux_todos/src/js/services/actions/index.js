
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
export const Del = 'Del';
export const Compelete = 'Compelete';
export const SetAdd = makeActionCreator(Add, 'obj');
export const SetDel = makeActionCreator(Del, 'indexs');
export const SetCompelete = makeActionCreator(Compelete, 'indexs');
//console.warn(SetAdd());
