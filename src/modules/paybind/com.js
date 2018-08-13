export default {
	props: [
		// 0-绑定支付宝 1-绑定微信 'type'-用户选择绑定的账号类型
		'payment',
	],
	data: function() {
		return {
			// 0-选择账号类型页面 1-填写账号信息页面
			process: 0,
			// 0-支付宝 1-微信
			type: 0,
			// 验证码
			code: '',
		};
	},
	methods: {
		setPayMethod: function(payType) {
			this.type = payType;
			this.process = 1;
		},
		bindPayment: function() {
			console.log(this.code);
		},
	},
	computed: {
		paytype: function() {
			if (this.payment !== 'type') {
				return this.payment;
			}
			else {
				return this.type;
			}
		},
		paymentName: function() {
			const names = ['支付宝', '微信'];
			return names[this.paytype];
		},
	}
};
