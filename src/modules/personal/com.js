import {api} from './../../service';
export default {
	data: function() {
		return {
		};
	},
	methods: {
		logout: function() {
			api.logout();
		},
		checkSigned: function() {
			if (this.$root.signed) {
				return true;
			}
			this.$root.navigator.toLogin();
			return false;
		},
		setPassword: function() {
			if (this.checkSigned()) {
				this.$root.navigator.toPassword();
			}
		},
		setAlipay: function() {
			if (this.checkSigned()) {
				this.$root.navigator.toPayBind('0');
			}
		},
		setWechat: function() {
			if (this.checkSigned()) {
				this.$root.navigator.toPayBind('1');
			}
		},
		toPickup: function() {
			if (this.checkSigned()) {
				this.$root.navigator.toPickup();
			}
		},
	},
	filters: {
		cut: function(tel) {
			if (tel) {
				tel = tel.toString();
				return tel.substr(7);
			}
			return '';
		}
	},

};
