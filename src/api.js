import axios from 'axios';
import store from './store';

const ajax = (api, params) => {
	return axios({
		method: 'POST',
		baseURL: '/',
		data: params,
		url: api,
	}).then(res => {
		if (res.status === 200) {
			return Promise.resolve(res.data);
		}
		else {
			return Promise.reject();
		}
	});
};

const resolve = d => Promise.resolve(d);
const reject  = d => Promise.reject(d);

export default {

	async getUserInfo() {

		const data = await ajax('getUserInfo');
		if (data.status === 1000) {
			store.commit('signed', data.userInfo);
		}
		else if (data.status === 1001) {
			store.commit('unsigned');
		}
	},
	async login(tel, password) {

		const data = await ajax('sign', {tel, password});
		if (data.status === 1000) {
			return resolve();
		}
		else {
			return reject(data);
		}
	},
};
