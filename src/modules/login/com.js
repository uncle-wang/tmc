import {api, validator} from './../../service';
export default {
	data: function() {
		return {
			tel: '',
			password: '',
		};
	},
	methods: {
		login: function() {
			if (validator.phonenumber(this.tel) && validator.password(this.password)) {
				api.login(this.tel, this.password).then(() => {
					this.$router.go(-1);
				}).catch(data => {
					const status = data.status;
					// 用户不存在
					if (status === 2002) {
						alert('用户名或密码错误');
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
