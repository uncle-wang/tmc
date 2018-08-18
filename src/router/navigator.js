import router from './router';

const toRecharge = () => {
	router.push('/recharge');
};

const toLogin = () => {
	router.push('/login');
};

const toHome = () => {
	router.push('/home');
};

const toPersonal = () => {
	router.push('/me');
};

const toPayBind = (payment) => {
	router.push('/paybind/' + payment);
};

const toPickup = () => {
	router.push('/pickup');
};

const toPassword = () => {
	router.push('/password');
};

const toRegister = () => {
	router.push('/register');
};

const toReset = () => {
	router.push('/reset');
};

const toPickupHistory = () => {
	router.push('/pickup_history');
};

export default {
	toRecharge,
	toLogin,
	toHome,
	toPersonal,
	toPayBind,
	toPickup,
	toPassword,
	toRegister,
	toReset,
	toPickupHistory
};
