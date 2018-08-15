<template>
	<div class="wrap">
		<div class="page-title">快速注册</div>
		<form autocomplete="false" @submit.prevent="register">
			<div class="input-wrap"><input type="text" v-model="tel" placeholder="输入手机号"></div>
			<code-input v-model="code"></code-input>
			<div class="input-wrap"><input type="password" placeholder="请输入密码" v-model="password"></div>
			<div class="input-wrap"><input type="password" placeholder="请确认密码" v-model="password2"></div>
			<div class="button-wrap"><input class="button" type="submit" value="确 定"></div>
			<div class="button-wrap"><a class="button outline" @click="$router.go(-1)">返 回</a></div>
		</form>
	</div>
</template>
<script>
	import {api, validator} from './../../service';
	export default {
		data: function() {
			return {
				tel: '',
				password: '',
				password2: '',
				code: '',
			};
		},
		methods: {
			register: function() {
				const {tel, password, password2, code} = this;
				if (!validator.phonenumber(tel) || !validator.password(password) || !validator.password(password2) || !validator.smscode(code)) {
					return;
				}
				if (password !== password2) {
					alert('两次密码不一致');
					return;
				}
				api.register(tel, code, password).then(() => {
					alert('注册成功');
					this.$router.go(-1);
				}).catch(status => {
					if (status === 2001) {
						alert('手机号已被注册');
					}
					else if (status === 8001) {
						alert('验证码无效');
					}
					else {
						alert('请求异常，请稍后重试');
					}
				});
			},
		}
	};
</script>
<style scoped>
	.button-wrap {
		margin-top: 24px;
	}
</style>
