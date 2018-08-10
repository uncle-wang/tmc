export default {
	props: ['payment'],
	data: function() {
		return {
		};
	},
	computed: {
		paymentName: function() {
			const names = ['支付宝', '微信'];
			return names[this.payment];
		}
	}
};
