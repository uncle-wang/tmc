<template>
	<div>
		<div class="page-title">欢迎登录</div>
		<form id="login_form" autocomplete="false">
			<div class="input-wrap"><input type="text" name="tel" placeholder="输入手机号"></div>
			<div class="input-wrap"><input type="password" name="password" placeholder="请输入密码"></div>
			<div class="func-wrap">
				<a class="func-btn" href="register.html">快速注册</a>
				<a class="func-btn" href="reset.html">找回密码</a>
			</div>
			<div class="submit-wrap"><input type="submit" value="登 录"></div>
		</form>
		<a class="home-link" @click="navigator.toHome">随便逛逛</a>
		<div class="error-text"></div>
		<div class="info-text"></div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	@import './../../base';
	.page-title {
		font-size: 20px;
		padding: 0 24px;
		text-align: center;
		color: @baseColor;
		font-family: Arial;
		margin-top: 12%;
	}
	#login_form {
		overflow: hidden;
		padding: 0 24px;
	}
	.input-wrap {
		margin-top: 48px;
		border-bottom: 1px solid @baseColor;
		padding: 0 5px 8px;
		input {
			width: 100%;
			display: block;
			font-size: 16px;
			background: none;
			outline: none;
			border: none;
			&::-webkit-input-placeholder {
				color: #b1b1b1;
			}
		}
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
			border: none;
			outline: none;
			width: 100%;
			display: block;
			font-size: 18px;
			border-radius: 24px;
			margin: 8px 0;
			background: -webkit-linear-gradient(left, @gradientStart, @baseColor) no-repeat;
			color: #fff;
			height: 48px;
			color: #fff;
		}
	}
	.home-link {
		display: block;
		height: 46px;
		line-height: 48px;
		border: 1px solid @baseColor;
		border-radius: 24px;
		text-align: center;
		color: @baseColor;
		font-size: 18px;
		text-decoration: none;
		margin: 12px 24px 0;
		outline: 0;
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
