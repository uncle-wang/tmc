<template>
	<div class="wrap">
		<back></back>
		<p class="page-title">当前账户余额</p>
		<p class="balance"><span class="balance-num">
			{{$root.balance}}</span>豆
			<a class="link-btn inline" @click="tab=0" v-show="$root.balance>=102&&tab===1">指定金额</a>
		</p>
		<form @submit.prevent="pickup" v-show="$root.balance>=102&&tab===0">
			<p class="info-text center" v-show="!this.quota">请输入提现金额</p>
			<p class="info-text center" v-show="this.quota">预计手续费{{fee}}元</p>
			<div class="row">
				<input class="quota-input" type="number" v-model.number="quota" autofocus>
				<a class="link-btn inline" @click="tab=1">全部提现</a>
			</div>
			<button class="button alipay" type="submit" :disabled="!canPickup">
				<i class="iconfont icon-iconfontalipay"></i>
				确认提现
			</button>
			<button class="button wechat" type="submit" :disabled="!canPickup">
				<i class="iconfont icon-wechat"></i>
				确认提现
			</button>
		</form>
		<form @submit.prevent="pickupall" v-show="$root.balance<102||tab===1">
			<p class="info-text center" v-show="canPickupall&&$root.balance<102">最大可提现金额不足100，请使用全部提现功能</p>
			<p class="info-text center" v-show="canPickupall&&$root.balance>=102">您正在使用全部提现功能</p>
			<p class="info-text center" v-show="!canPickupall">当前余额不足，无法提现</p>
			<button class="button alipay" type="submit" :disabled="!canPickupall">
				<i class="iconfont icon-iconfontalipay"></i>
				全部提现
			</button>
			<button class="button wechat" type="submit" :disabled="!canPickupall">
				<i class="iconfont icon-wechat"></i>
				全部提现
			</button>
		</form>
		<div class="info">
			<p class="info-text">1、提现数额必须为整数，且<span class="markup">单笔提现数额不能少于100</span>(余豆不足100请参考第2条说明)</p>
			<p class="info-text">2、当您的账户<span class="markup">余豆数量不足100时，您可以使用全部提现功能</span>(此种情况下您仅能进行全部提现操作)</p>
			<p class="info-text">3、点击全部提现，将自动为您计算扣除手续费后可提现的最大数额</p>
			<p class="info-text">4、提现服务将收取<span class="markup">2%的手续费</span>，手续费从账户余豆中扣除，余豆不足将无法提现</p>
			<p class="info-text">5、手续费精确到整数位，如提现金额为124，124*2%=2.48，则将收取的手续费为3</p>
			<p class="info-text">6、每个账号<span class="markup">每日限提现一次</span>，申请提现后取消依然会扣除当日的提现机会，请知悉</p>
			<p class="info-text">7、为了您的账户安全，提现时<span class="markup">系统仅允许将已绑定的支付宝或微信作为收款账号</span>，以防您的账号被盗用后余豆被提现至不法分子的账号，若您还没有绑定支付宝或微信，将不能进行提现操作，<a class="info-link" @click="$root.navigator.toPayBind('type')">点击这里</a>去绑定</p>
			<p class="info-text">8、1个工作日内到账</p>
		</div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	@import './../../base';
	.row {
		margin-top: 20px;
		text-align: center;
	}
	.quota-input {
		width: 64px;
		border: 1px solid #000;
		height: 24px;
		border-radius: 3px;
		padding: 2px 8px;
		outline: none;
		font-size: 20px;
		text-align: center;
		color: @baseColor;
	}
	.balance {
		text-align: center;
		margin-top: 16px;
	}
	.balance-num {
		font-size: 26px;
		color: #ffa500;
		margin-right: 4px;
	}
	.info-text.center {
		text-align: center;
		margin-top: 16px;
	}
	.button {
		width: 160px;
		height: 40px;
		line-height: 40px;
		border-radius: 5px;
		margin: 24px auto 0;
		&.alipay {
			background: @alipay;
		}
		&.wechat {
			background: @wechat;
			margin-top: 12px;
		}
		&[disabled] {
			background: #ccc;
		}
		.iconfont {
			font-size: 20px;
			margin-right: 2px;
			position: relative;
			top: 1px;
		}
	}
	.info {
		margin-top: 32px;
	}
</style>
