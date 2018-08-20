<template>
	<div>
		<back></back>
		<div class="quota-select">
			<p class="page-title">请选择充值金额</p>
			<ul class="quota-list">
				<li class="quota-item" :class="{selected: item===quota}" v-for="item in quotaList" @click="quotaUpdate(item)">
					<div class="quota">{{item | currency}}豆</div>
					<div class="price">售价:{{item | currency}}元</div>
				</li>
			</ul>
			<form action="https://www.paypayzhu.com/api/pay" method="post">
				<input type="hidden" name="api_user" :value="apiUser">
				<input type="hidden" name="price" :value="quotaStr">
				<input type="hidden" name="type" value="2">
				<input type="hidden" name="redirect" :value="redirect">
				<input type="hidden" name="order_id" :value="rechargeId">
				<input type="hidden" name="order_info" :value="order_info">
				<input type="hidden" name="signature" :value="signature_alipay">
				<button type="submit" class="btn alipay" :disabled="!orderAvailable">
					<i class="iconfont icon-iconfontalipay"></i>
					{{quota?'支付'+quota+'元':'请选择金额'}}
				</button>
			</form>
			<form action="https://www.paypayzhu.com/api/pay" method="post">
				<input type="hidden" name="api_user" :value="apiUser">
				<input type="hidden" name="price" :value="quotaStr">
				<input type="hidden" name="type" value="1">
				<input type="hidden" name="redirect" :value="redirect">
				<input type="hidden" name="order_id" :value="rechargeId">
				<input type="hidden" name="order_info" :value="order_info">
				<input type="hidden" name="signature" :value="signature_wechat">
				<button type="submit" class="btn wechat" :disabled="!orderAvailable">
					<i class="iconfont icon-wechat"></i>
					{{quota?'支付'+quota+'元':'请选择金额'}}
				</button>
			</form>
		</div>
	</div>
</template>
<style lang="less" scoped src="./com.less"></style>
<script src="./com.js"></script>
