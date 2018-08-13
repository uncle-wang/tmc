import api from './../../api';
export default {
	data: function() {
		return {
			tel: '',
			password: '',
		};
	},
	methods: {
		login: function() {
			api.login(this.tel, this.password).then(() => {
				this.$router.go(-1);
			});
		}
	}
};
