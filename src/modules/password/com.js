import {api, validator} from './../../service';
export default {
	data: function() {
		return {
			oldpassword: '',
			newpassword: '',
			newpassword2: ''
		};
	},
	methods: {
		updatePassword: function() {
			const {oldpassword, newpassword, newpassword2} = this;
			if (validator.password(oldpassword) && validator.password(newpassword) && validator.password(newpassword2)) {
				if (newpassword !== newpassword2) {
					alert('两次密码不一致');
					return;
				}
				api.updatePassword(oldpassword, newpassword).then(() => {
					this.$router.go(-1);
				}).catch(data=> {
					const {status} = data;
					if (status === 1001) {
						alert('登录已超时，请登录后重试');
						this.$root.navigator.toLogin();
					}
					// 密码错误
					else if (status === 2005) {
						let info = '密码错误';
						const {wrongTimes} = data;
						if (wrongTimes > 2 && wrongTimes < 5) {
							info = info + '，连续输错5次账号将被锁定，您当前已连续错误' + wrongTimes + '次';
						}
						else if (wrongTimes >= 5) {
							info = info + '，由于连续错误次数过多，您的账号已被锁定，请通过找回密码功能进行密码重置';
						}
						alert(info);
					}
					// 账号被锁定
					else if (status === 2009) {
						alert('您的账号已被锁定，请通过找回密码功能进行密码重置');
					}
				});
			}
		}
	}
};
