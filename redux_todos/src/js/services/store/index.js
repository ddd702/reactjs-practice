import { createStore } from 'redux';
import {ReducerRoot} from '../reducers/index';

// 打印初始状态

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = Store.subscribe(() =>
//   console.log(Store.getState())
// );

// 发起一系列 action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// 停止监听 state 更新
//unsubscribe();
//Store.dispatch(SetSearch('it is a test'));

export const AccountListStore = createStore(ReducerRoot);
console.warn(AccountListStore.getState());