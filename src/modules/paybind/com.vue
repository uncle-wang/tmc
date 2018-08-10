<template>
	<div>
		<back title="返回个人中心"></back>
		<div class="wrap">
			<div class="title">绑定{{paymentName}}账号</div>
			<form autocomplete="false">
				<div class="line">
					<div class="input-wrap"><input class="input" type="text" :placeholder="paymentName+'账号'" name="alipay"></div>
					<div class="input-wrap pend">
						<input type="text" class="input" name="code" placeholder="短信验证码">
						<div class="code-wrap">
							<a id="code_btn" class="code-btn">获取验证码</a>
							<span class="code-counter">60秒</span>
						</div>
					</div>
				</div>
				<div class="submit-wrap"><input class="button" type="submit" value="确 定"></div>
			</form>
		</div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	@import './../../base';
	.wrap {
		padding: 0 16px;
		overflow: hidden;
	}
	.title {
		margin-top: 20%;
		font-size: 22px;
		text-align: center;
	}
	.line {
		overflow: hidden;
	}
	.input-wrap {
		border: 1px solid @baseColor;
		margin-top: 18px;
		border-radius: 3px;
		overflow: hidden;
		padding: 0 12px;
		&.pend {
			padding-right: 90px;
			position: relative;
		}
	}
	.input {
		height: 36px;
		display: block;
		width: 100%;
		border: none;
		outline: 0;
		color: #757575;
		font-size: 14px;
	}
	.code-wrap {
		right: 2px;
		position: absolute;
		top: 6px;
		font-size: 14px;
		padding: 2px 0;
		color: @baseColor;
		width: 78px;
		text-align: center;
	}
	.code-counter {
		display: none;
	}
	.submit-wrap {
		margin-top: 20px;
	}
</style>
