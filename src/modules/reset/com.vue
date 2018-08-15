<template>
	<div class="wrap">
		<div class="page-title">重置密码</div>
		<form autocomplete="false" @submit.prevent="reset">
			<div class="input-wrap"><input type="text" v-model="tel" placeholder="输入手机号"></div>
			<code-input v-model="code"></code-input>
			<div class="input-wrap"><input type="password" placeholder="输入新密码" v-model="password"></div>
			<div class="input-wrap"><input type="password" placeholder="确认新密码" v-model="password2"></div>
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
			reset: function() {
				const {tel, password, password2, code} = this;
				if (!validator.phonenumber(tel) || !validator.password(password) || !validator.password(password2) || !validator.smscode(code)) {
					return;
				}
				if (password !== password2) {
					alert('两次密码不一致');
					return;
				}
				api.reset(tel, code, password).then(() => {
					alert('密码重置成功');
					this.$router.go(-1);
				}).catch(status => {
					if (status === 2002) {
						alert('手机号不存在');
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
