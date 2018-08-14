export default {
	methods: {
		toPersonal: function() {
			if (this.$root.signed) {
				this.$root.navigator.toPersonal();
			}
			else {
				this.$root.navigator.toLogin();
			}
		},
		toRecharge: function() {
			if (this.$root.signed) {
				this.$root.navigator.toRecharge();
			}
			else {
				this.$root.navigator.toLogin();
			}
		},
	}
};