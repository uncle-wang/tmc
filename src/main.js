import Vue from 'vue';
// 路由配置
import {router} from './router/index.js';
// 基础样式
import './styles';

// 全局组件
import {back, codeInput} from './components';
Vue.component('back', back);
Vue.component('code-input', codeInput);

// 全局过滤器
import {currency} from './filters';
Vue.filter('currency', currency);

const app = new Vue({

	el: '#app',
	router
});
