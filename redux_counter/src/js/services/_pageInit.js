import $ from '../libs/jquery/2.1.4/jquery';
import LeftMenu from '../components/leftMenu';
import { leftMenuOpt } from '../services/_config';
import React from 'react';
import ReactDOM from 'react-dom';
(function pageInit() {//页面初始化
    let winH = $(window).height();
    let headerH = $('.top-header').outerHeight();
    $('.content-wrap,.content-menu').css('min-height', winH - headerH);
})();
var menuEl=document.querySelector('.content-menu');
ReactDOM.render(<LeftMenu menuData={leftMenuOpt}/>,menuEl);