import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

	state: {
		userInfo: {
			signed: false,
			tel: null,
			balance: 0,
			alipay: null,
			wechat: null
		},
	},
	mutations: {
		unsigned(state) {
			const userInfo = state.userInfo;
			userInfo.signed = false;
			userInfo.tel = null;
			userInfo.balance = null;
			userInfo.alipay = null;
			userInfo.wechat = null;
		},
		signed(state, userInfoData) {
			const userInfo = state.userInfo;
			userInfo.signed = true;
			userInfo.tel = userInfoData.tel;
			userInfo.balance = userInfoData.balance;
			userInfo.alipay = userInfoData.alipay;
			userInfo.wechat = userInfoData.wechat;
		},
	}
});

export default store;
