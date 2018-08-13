import axios from 'axios';
import store from './store';

const resolve = d => Promise.resolve(d);
const reject  = d => Promise.reject(d);

const ajax = (api, params) => {
	return axios({
		method: 'POST',
		baseURL: '/',
		data: params,
		url: api,
	}).then(res => {
		if (res.status === 200) {
			return resolve(res.data);
		}
		else {
			return reject({status: 1004});
		}
	});
};

export default {

	async getUserInfo() {

		const data = await ajax('getUserInfo');
		if (data.status === 1000) {
			store.commit('signed', data.userInfo);
		}
		else {
			store.commit('unsigned');
		}
	},
	async login(tel, password) {

		const data = await ajax('sign', {tel, password});
		if (data.status === 1000) {
			store.commit('signed', data.userInfo);
			return resolve();
		}
		// 已登录
		else if (data.status === 2004) {
			return resolve();
		}
		else {
			return reject(data);
		}
	},
	async logout() {

		const {status} = await ajax('logout');
		if (status === 1000) {
			store.commit('unsigned');
			return resolve();
		}
		else if (status === 1001) {
			return resolve();
		}
		else {
			return reject(status);
		}
	},
	async updatePassword(oldpassword, newpassword) {

		const data = await ajax('updatePassword', {oldpassword, newpassword});
		if (data.status === 1000) {
			return resolve();
		}
		return reject(data);
	},
};