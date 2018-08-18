import {api} from './../../service';
import {navigator} from './../../router';
// 导入二维码图片
import barcode from './barcode';
export default {
	data: function() {
		return {
			// 充值金额
			quota: null,
			// 充值订单id
			rechargeId: null,
			// 签名
			signature_alipay: null,
			signature_wechat: null,
			// 订单信息
			order_info: null,
			// 重定向url
			redirect: 'http://localhost:8082',
			// apiuser
			apiUser: 'a7026c0e',
			// 金额列表
			quotaList: [10, 20, 50, 100, 300, 1000, 2000, 5000, 10000],
		};
	},
	methods: {
		// 设置支付方式并创建充值订单
		createRecharge: function(quota) {
			api.createRecharge(quota, this.redirect).then(orderInfo => {
				this.quota = quota;
				this.rechargeId = orderInfo.rechargeId;
				this.signature_alipay = orderInfo.signature_alipay;
				this.signature_wechat = orderInfo.signature_wechat;
				this.order_info = orderInfo.order_info;
			}).catch(status => {
				if (status === 1001) {
					alert('请先登录');
					this.$store.commit('unsigned');
					navigator.toLogin();
				}
				else {
					alert('请求异常，请稍后重试');
				}
			});
		},
	},
	computed: {
		// 金额格式化
		quotaStr: function() {
			return this.quota + '.00';
		},
		// 可提交状态
		orderAvailable: function() {
			if (this.quota && this.rechargeId && this.signature_alipay && this.signature_wechat && this.apiUser) {
				return true;
			}
			return false;
		},
	},
};
