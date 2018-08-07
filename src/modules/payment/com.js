// 导入二维码图片
import barcode from './barcode';
export default {
	// 金额
	props: ['quota'],
	data: function() {
		return {
			barcode: {
				show: false,
				// 支付宝对应金额的二维码
				alipayImage: barcode.alipay['q' + this.quota],
				// 微信...
				wechatImage: barcode.wechat['q' + this.quota],
			},
			// 0-支付宝 1-微信
			payment: 0,
		};
	},
	methods: {
		showAlipay: function() {
			this.barcode.show = true;
			this.payment = 0;
		},
		showWechat: function() {
			this.barcode.show = true;
			this.payment = 1;
		},
	},
};
