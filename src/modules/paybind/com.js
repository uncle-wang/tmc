import {api, validator} from './../../service';
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
			type: null,
			// 支付宝
			alipay: {
				alipay: '',
				smscode: '',
				realname: ''
			},
			// 微信
			wechat: {
				wechat: '',
				smscode: '',
				realname: ''
			},
		};
	},
	methods: {
		setPayMethod: function(payType) {
			this.type = payType;
			this.process = 1;
		},
		bind: function(p) {
			p.then(() => {
				alert('绑定成功!');
				this.$router.go(-1);
			}).catch(status => {
				if (status === 1001) {
					alert('您还没有登录或登录已超时，请登录后重试');
					this.$root.navigator.toLogin();
				}
				else if (status === 8001) {
					alert('验证码无效');
				}
			});
		},
		setAlipay: function() {
			const {alipay, smscode, realname} = this.alipay;
			if (!validator.alipay(alipay) || !validator.smscode(smscode) || !validator.realname(realname)) {
				return;
			}
			this.bind(api.setAlipay(alipay, smscode, realname));
		},
		setWechat: function() {
			const {wechat, smscode, realname} = this.wechat;
			if (!validator.wechat(wechat) || !validator.smscode(smscode) || !validator.realname(realname)) {
				return;
			}
			this.bind(api.setWechat(wechat, smscode, realname));
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
