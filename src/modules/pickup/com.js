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
		};
	},
	methods: {
		pickup: function() {
			console.log(this.quota);
		},
		pickupall: function() {
			console.log(this.quota);
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
