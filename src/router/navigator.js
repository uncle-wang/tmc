import router from './router';

const toPay = () => {
	router.push('/pay');
};

const toLogin = (redirect) => {
	let o = {path: '/login'};
	if (redirect) {
		o.query = {redirect: encodeURIComponent(redirect)}
	}
	router.push(o);
};

const toHome = () => {
	router.push('/home');
};

export default {toPay, toLogin, toHome};
