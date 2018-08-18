import Vue from 'vue';
// 路由配置
import {router, navigator} from './router/index.js';
// 基础样式
import './styles';

// 组件
import {back, codeInput, loading} from './components';
Vue.component('back', back);
Vue.component('code-input', codeInput);

// 全局过滤器
import {currency, date} from './filters';
Vue.filter('currency', currency);
Vue.filter('date', date);

// 服务
import {api, store} from './service';

const app = new Vue({

	el: '#app',
	router,
	store,
	data: {
		navigator,
	},
	components: {loading},
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
		loading: function() {
			return store.state.loading;
		},
	},
	beforeMount: function() {
		// 获取登录信息
		api.getUserInfo().catch(() => {});
	}
});
