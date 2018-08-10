import Vue from 'vue';
// 路由配置
import {router} from './router/index.js';
// 基础样式
import './styles';

// 全局组件
import {back} from './components';
Vue.component('back', back);

// 全局过滤器
import {currency} from './filters';
Vue.filter('currency', currency);

const app = new Vue({

	el: '#app',
	router
});
