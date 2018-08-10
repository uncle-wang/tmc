// 导入二维码图片
import barcode from './barcode';
export default {
	// 金额
	props: ['quota'],
	data: function() {
		return {
			// 0-选择金额 1-选择支付方式 2-二维码
			process: 0,
			barcode: {
				// 支付宝对应金额的二维码
				alipayImage: barcode.alipay['q' + this.quota],
				// 微信...
				wechatImage: barcode.wechat['q' + this.quota],
			},
			// 0-支付宝 1-微信
			payment: 0,
			// 金额选项
			quotaList: [10, 30, 100, 300, 1000, 2000, 5000, 10000]
		};
	},
	methods: {
		showAlipay: function() {
			this.payment = 0;
		},
		showWechat: function() {
			this.payment = 1;
		},
	},
};
