import Vue from 'vue';
import VueRouter from 'vue-router';

import {home, payment} from './modules';

Vue.use(VueRouter);

const router = new VueRouter({

	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/pay/:quota',
			component: payment,
			props: true
		},
	]
});

export default router;
