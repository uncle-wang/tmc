import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

	state: {
		userInfo: {
			signed: false,
			tel: null,
		},
	},
	mutations: {
		unsigned(state) {
			state.userInfo.signed = false;
			state.userInfo.tel = null;
		},
		signed(state, userInfo) {
			state.userInfo.signed = true;
			state.userInfo.tel = userInfo.tel;
		},
	}
});

export default store;
