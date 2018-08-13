<template>
	<div>
		<div class="page-title">欢迎登录</div>
		<form id="login_form" autocomplete="false" @submit.prevent="login">
			<div class="input-wrap"><input type="text" v-model="tel" placeholder="输入手机号"></div>
			<div class="input-wrap"><input type="password" v-model="password" placeholder="请输入密码"></div>
			<div class="func-wrap">
				<a class="func-btn" href="register.html">快速注册</a>
				<a class="func-btn" href="reset.html">找回密码</a>
			</div>
			<div class="submit-wrap"><input type="submit" class="button" value="登 录"></div>
		</form>
		<a class="button outline home-link" @click="$root.navigator.toHome">随便逛逛</a>
		<div class="error-text"></div>
		<div class="info-text"></div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	@import './../../base';
	#login_form {
		overflow: hidden;
		padding: 0 24px;
	}
	.func-wrap {
		margin-top: 24px;
		text-align: right;
	}
	.func-btn {
		color: #555;
		font-size: 14px;
		text-decoration: none;
		margin-left: 4px;
		outline: none;
	}
	.submit-wrap {
		margin-top: 32px;
		input {
			margin: 8px 0;
		}
	}
	.home-link {
		margin: 12px 24px 0;
		width: auto;
	}
	.error-text {
		display: none;
		padding: 0 24px;
		text-align: center;
		color: red;
		margin-top: 16px;
		font-size: 14px;
	}
	.info-text {
		display: none;
		padding: 0 24px;
		text-align: center;
		color: #2e9834;
		margin-top: 16px;
		font-size: 14px;
	}
</style>
