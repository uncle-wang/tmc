import {api} from './../../service';
// 导入二维码图片
import barcode from './barcode';
export default {
	data: function() {
		return {
			// 0-选择金额 1-二维码
			process: 0,
			// 充值金额
			quota: null,
			// 充值方式：0-支付宝 1-微信
			payment: null,
			// 充值订单id
			rechargeId: null,
			// 金额列表
			quotaList: [10, 20, 50, 100, 300, 1000, 2000, 5000, 10000],
		};
	},
	methods: {
		// 设置支付方式并创建充值订单
		createRecharge: function(payment) {
			const account = payment === '0' ? this.$root.alipay : this.$root.wechat;
			api.createRecharge(this.quota, payment, account).then((rechargeId) => {
				this.payment = payment;
				this.process = 1;
				this.rechargeId = rechargeId;
			}).catch(status => {
				alert('请求异常，请稍后重试');
			});
		},
		// 设置充值金额并跳转至选择支付方式页面
		setQuota: function(quota) {
			this.quota = quota;
		},
		// 取消订单并返回上一步
		back: function() {
			api.cancelRecharge(this.rechargeId).finally(() => {
				this.process = 0;
			});
		},
	},
	computed: {
		// 支付宝二维码
		alipayImage: function() {
			return barcode.alipay['q' + this.quota];
		},
		// 微信二维码
		wechatImage: function() {
			return barcode.wechat['q' + this.quota];
		},
	},
};
