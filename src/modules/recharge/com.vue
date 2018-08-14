<template>
	<div>
		<back></back>
		<div class="quota-select" v-show="process===0">
			<p class="page-title">请选择充值金额</p>
			<ul class="quota-list">
				<li class="quota-item" :class="{selected: item===quota}" v-for="item in quotaList" @click="setQuota(item)">
					<div class="quota">{{item | currency}}豆</div>
					<div class="price">售价:{{item | currency}}元</div>
				</li>
			</ul>
			<button class="btn alipay" :disabled="!quota" @click="setPayMethod(0)">
				<i class="iconfont icon-iconfontalipay"></i>
				{{quota ? '支付' + quota + '元' : '请选择金额'}}
			</button>
			<button class="btn wechat" :disabled="!quota" @click="setPayMethod(1)">
				<i class="iconfont icon-wechat"></i>
				{{quota ? '支付' + quota + '元' : '请选择金额'}}
			</button>
		</div>
		<div class="barcode" v-show="process===1">
			<div class="info">
				<p class="info-text">1.扫描下方二维码完成支付</p>
				<p class="info-text">2.点击页面底部"完成支付"按钮</p>
				<p class="info-text">3.等待系统处理您的充值请求(1小时内)</p>
				<p class="info-text">4.充值成功</p>
			</div>
			<div class="barcode-box" v-show="alipayImage">
				<img :src="alipayImage" v-show="payment===0" class="code-image">
				<img :src="wechatImage" v-show="payment===1" class="code-image offset">
			</div>
			<div class="no-barcode" v-show="!alipayImage">获取二维码图片失败</div>
			<a class="link-btn" @click="process=0">返回上一步</a>
			<button class="btn" :class="{alipay: payment === 0, wechat: payment === 1}">完成支付</button>
		</div>
	</div>
</template>
<style lang="less" scoped src="./com.less"></style>
<script src="./com.js"></script>
