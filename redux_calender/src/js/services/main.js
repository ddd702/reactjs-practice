import $ from '../libs/jquery/2.1.4/jquery';
import React from 'react';
import ReactDom from 'react-dom';
// import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import App from '../containers/app';
import {CalStore} from './store/index';
// import ReduxThunk from 'redux-thunk';
// var store = createStore(ReducerRoot,applyMiddleware(ReduxThunk));
//var dom_counter=document.querySelector('.j-counter');
ReactDom.render(<Provider store={CalStore}><App/></Provider>,document.querySelector('#j-calander'));