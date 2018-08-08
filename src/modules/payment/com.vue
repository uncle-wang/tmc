<template>
	<div>
		<div class="payment-select" v-show="!barcode.show">
			<div class="title">请选择支付方式</div>
			<div class="pay-list">
				<a class="payment" @click="showAlipay()"><i class="iconfont icon-iconfontalipay"></i></a>
				<a class="payment" @click="showWechat()"><i class="iconfont icon-wechat"></i></a>
			</div>
		</div>
		<div class="barcode" v-show="barcode.show">
			<img :src="barcode.alipayImage" v-show="payment===0" class="code-image">
			<img :src="barcode.wechatImage" v-show="payment===1" class="code-image wechat">
			<div class="choice">
				<p>其他付款方式</p>
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
		margin-top: 40%;
		text-align: center;
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
