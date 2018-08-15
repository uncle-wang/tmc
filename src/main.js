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

// 服务
import {api, store} from './service';

const app = new Vue({

	el: '#app',
	router,
	data: {
		navigator,
	},
	computed: {
		signed: function() {
			return store.state.userInfo.signed;
		},
		balance: function() {
			return store.state.userInfo.balance;
		},
		tel: function() {
			return store.state.userInfo.tel;
		},
		alipay: function() {
			return store.state.userInfo.alipay;
		},
		wechat: function() {
			return store.state.userInfo.wechat;
		},
	},
	beforeMount: function() {
		// 获取登录信息
		api.getUserInfo().catch(() => {});
	}
});
