<template>
	<div>
		<div class="title">请选择支付方式</div>
		<div class="pay-list">
			<a class="payment" id="alipay" @click="showAlipay()"></a>
			<a class="payment" id="wechat" @click="showWechat()"></a>
		</div>
		<div class="barcode" v-show="barcode.show">
			<img class="code-image" :src="barcode.alipayImage" v-show="payment===0">
			<img class="code-image" :src="barcode.wechatImage" v-show="payment===1">
		</div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	.title {
		font-size: 24px;
		margin-top: 40%;
		text-align: center;
	}
	#alipay {
		background-image: url(./image/alipay.png);
	}
	#wechat {
		background-image: url(./image/wechat.png);
	}
	.pay-list {
		overflow: hidden;
		margin-top: 10%;
	}
	.payment {
		display: block;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 20px auto 0;
		height: 72px;
		width: 72px;
	}
	.barcode {
		z-index: 2;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .9);
		text-align: center;
	}
	.code-image {
		display: inline-block;
		width: 90%;
		margin-top: 60px;
	}
</style>
