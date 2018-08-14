import {api, validator} from './../../service';
// 提现手续费2%
const percent = 2;
// 余额不足提示语
const info = '对不起，您当前的余额不足，无法提现';
export default {
	data: function() {
		return {
			quota: null,
			tab: 0,
			loading: false
		};
	},
	methods: {
		// 计算提现最大值
		getMaxPickupValue: function(balance) {
			let max = Math.floor(balance * (100 - percent) / 100);
			while (max + Math.ceil(max * 2 / 100) <= balance) {
				max ++;
			}
			return -- max;
		},
		confirm: function(quota, fee, payment, callback) {
			const account = payment === '0' ? this.$root.alipay : this.$root.wechat;
			const info = '提现金额：' + quota + '，收款账号：' + account + '，预计手续费：' + fee + '，确认？';
			if (window.confirm(info)) {
				callback();
			}
		},
		success: function() {
			this.loading = false;
			alert('操作成功，系统将会在一个工作日内处理您的提现请求');
			this.$router.go(-1);
		},
		error: function(status) {
			this.loading = false;
			if (status === 1001) {
				alert('您的登录已超时，请重新登录后再次尝试');
				this.$root.navigator.toLogin();
			}
			else if (status === 2003) {
				alert('余额不足，您的账户余额可能发生了变动，请您刷新页面后重试');
			}
			else if (status === 3004) {
				alert('您今日的提现次数已达上限，请明天再次尝试');
			}
			else {
				alert('请求异常，请稍后重试');
			}
		},
		pickup: function(payment) {
			const {quota, fee} = this;
			this.confirm(quota, fee, payment, () => {
				this.loading = true;
				api.pickup(quota, payment)
				.then(this.success)
				.catch(this.error)
				.finally(() => {this.loading = false});
			});
		},
		pickupall: function(payment) {
			const balance = this.$root.balance;
			const quota = this.getMaxPickupValue(balance);
			const fee = Math.ceil(quota * percent / 100);
			this.confirm(quota, fee, payment, () => {
				this.loading = true;
				api.pickupall(payment)
				.then(this.success)
				.catch(this.error)
				.finally(() => {this.loading = false});
			});
		},
	},
	computed: {
		fee: function() {
			return Math.ceil(this.quota * percent / 100);
		},
		canPickup: function() {
			if (!validator.pickupquota(this.quota)) {
				return false;
			}
			const quota = this.quota;
			if (quota + this.fee > this.$root.balance) {
				return false;
			}
			return true;
		},
		canPickupall: function() {
			if (this.$root.balance < 2) {
				return false;
			}
			return true;
		},
	}
};
