<template>
	<div>
		<back></back>
		<div class="wrap">
			<div class="payment-select" v-show="payment==='type'&&process===0">
				<p class="page-title">请选择账号类型</p>
				<div class="pay-list">
					<a class="payment" @click="setPayMethod('0')"><i class="iconfont icon-iconfontalipay"></i></a>
					<a class="payment" @click="setPayMethod('1')"><i class="iconfont icon-wechat"></i></a>
				</div>
			</div>
			<div class="bind-form" v-show="payment!=='type'||process===1">
				<div class="page-title">绑定{{paymentName}}账号</div>
				<form autocomplete="false" @submit.prevent="setAlipay" v-show="paytype==='0'">
					<div class="line">
						<div class="input-wrap"><input type="text" v-model="alipay.alipay" placeholder="支付宝账号"></div>
						<div class="input-wrap"><input type="text" v-model="alipay.realname" placeholder="收款人真实姓名"></div>
						<code-input v-model="alipay.smscode"></code-input>
					</div>
					<div class="button-wrap"><input class="button" type="submit" value="确 定"></div>
				</form>
				<form autocomplete="false" @submit.prevent="setWechat" v-show="paytype==='1'">
					<div class="line">
						<div class="input-wrap"><input type="text" v-model="wechat.wechat" placeholder="微信账号"></div>
						<div class="input-wrap"><input type="text" v-model="wechat.realname" placeholder="收款人真实姓名"></div>
						<code-input v-model="wechat.smscode"></code-input>
					</div>
					<div class="button-wrap"><input class="button" type="submit" value="确 定"></div>
				</form>
				<a class="link-btn" @click="process=0" v-show="payment==='type'&&process===1">重新选择账号类型</a>
			</div>
		</div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped src="./com.less"></style>
