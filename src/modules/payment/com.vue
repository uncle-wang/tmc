<template>
	<div>
		<div class="quota-select" v-show="process===0">
			<p class="title">请选择充值金额</p>
			<ul>
				<li class="quota-item" v-for="quota in quotaList">
					<span class="quota">{{quota}}</span>
				</li>
			</ul>
		</div>
		<div class="payment-select" v-show="process===1">
			<p class="title">请选择支付方式</p>
			<div class="pay-list">
				<a class="payment" @click="showAlipay()"><i class="iconfont icon-iconfontalipay"></i></a>
				<a class="payment" @click="showWechat()"><i class="iconfont icon-wechat"></i></a>
			</div>
		</div>
		<div class="barcode" v-show="process===2">
			<img :src="barcode.alipayImage" v-show="payment===0" class="code-image">
			<img :src="barcode.wechatImage" v-show="payment===1" class="code-image wechat">
			<div class="choice">
				<p>选择其他付款方式</p>
				<i v-show="payment===1" @click="showAlipay" class="iconfont little icon-iconfontalipay"></i>
				<i v-show="payment===0" @click="showWechat" class="iconfont little icon-wechat"></i>
			</div>
		</div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	.title {
		font-size: 24px;
		text-align: center;
	}
	.quota-select {
		margin-top: 36%;
	}
	.payment-select {
		margin-top: 40%;
	}
	.pay-list {
		overflow: hidden;
		margin-top: 10%;
	}
	.payment {
		display: block;
		margin: 20px auto 0;
		text-align: center;
		height: 72px;
		width: 72px;
		line-height: 72px;
	}
	.iconfont {
		font-size: 64px;
		&.little {
			font-size: 32px;
		}
		&.icon-iconfontalipay {
			color: #13aeec;
		}
		&.icon-wechat {
			color: #00af41;
		}
	}
	.barcode {
		text-align: center;
	}
	.code-image {
		display: inline-block;
		width: 90%;
		&.wechat {
			margin-top: 6%;
		}
	}
	.choice {
		margin-top: 12px;
		p {
			font-size: 14px;
			color: #ff5722;
			margin-bottom: 8px;
		}
	}
</style>
