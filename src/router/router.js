import Vue from 'vue';
import VueRouter from 'vue-router';

import * as modules from './../modules';

Vue.use(VueRouter);

const router = new VueRouter({

	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: modules.home
		},
		{
			path: '/login',
			component: modules.login,
			props: (route) => ({redirect: route.query.redirect})
		},
		{
			path: '/recharge',
			component: modules.recharge
		},
		{
			path: '/paybind/:payment',
			component: modules.paybind,
			props: true
		},
		{
			path: '/me',
			component: modules.personal
		},
		{
			path: '/pickup',
			component: modules.pickup
		},
	]
});

export default router;
