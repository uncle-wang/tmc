<template>
	<div>
		<back></back>
		<div class="quota-select" v-show="process===0">
			<p class="page-title">请选择充值金额</p>
			<ul class="quota-list">
				<li class="quota-item" v-for="quota in quotaList" @click="setQuota(quota)">
					<span class="quota">{{quota | currency}}</span>
				</li>
			</ul>
		</div>
		<div class="payment-select" v-show="process===1">
			<p class="page-title">请选择支付方式</p>
			<div class="pay-list">
				<a class="payment" @click="setPayMethod(0)"><i class="iconfont icon-iconfontalipay"></i></a>
				<a class="payment" @click="setPayMethod(1)"><i class="iconfont icon-wechat"></i></a>
			</div>
			<a class="link-btn" @click="toQuotaPage">重新选择金额</a>
		</div>
		<div class="barcode" v-show="process===2">
			<div class="barcode-box" v-show="alipayImage">
				<img :src="alipayImage" v-show="payment===0" class="code-image">
				<img :src="wechatImage" v-show="payment===1" class="code-image offset">
			</div>
			<div class="no-barcode" v-show="!alipayImage">获取二维码图片失败</div>
			<a class="link-btn" @click="toPayMethodsPage">重新选择支付方式</a>
		</div>
	</div>
</template>
<style lang="less" scoped src="./com.less"></style>
<script src="./com.js"></script>
