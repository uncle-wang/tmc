import Vue from 'vue';
// 路由配置
import {router, navigator} from './router/index.js';
// 基础样式
import './styles';

// 全局组件
import {back, codeInput} from './components';
Vue.component('back', back);
Vue.component('code-input', codeInput);

// 全局过滤器
import {currency} from './filters';
Vue.filter('currency', currency);

// api
import api from './api';
// store
import store from './store';

const app = new Vue({

	el: '#app',
	router,
	store,
	data: {
		navigator
	},
	beforeMount: function() {
		// 获取登录信息
		api.getUserInfo();
	}
});
