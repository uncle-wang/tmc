import api from './../../api';
export default {
	props: ['redirect'],
	data: function() {
		return {
			tel: '',
			password: '',
		};
	},
	methods: {
		login: function() {
			api.login(this.tel, this.password).then(() => {
				this.$router.push(this.redirect);
			});
		}
	}
};
