import React from 'react';
import ReactDom from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import App from '../containers/app';
import {ReducerRoot} from './reducers/index';
import ReduxThunk from 'redux-thunk';
var store = createStore(ReducerRoot,applyMiddleware(ReduxThunk));
var dom_counter=document.querySelector('.j-app');
ReactDom.render(<App/>,dom_counter);