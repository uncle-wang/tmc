<template>
	<div class="container">
		<div class="my-card-wrap">
			<back :white="true"></back>
			<div class="my-info-wrap">
				<div class="my-info-icon signed" v-show="$root.signed">{{$root.tel | cut}}</div>
				<div class="my-info-name signed" v-show="$root.signed">{{$root.tel}}</div>
				<div class="my-info-icon" id="icon_default" v-show="!$root.signed" @click="$root.navigator.toLogin">
					<i class="iconfont icon-denglu"></i>
				</div>
				<div class="my-info-name unsigned" v-show="!$root.signed"><input id="login_btn" type="button" value="点击登录" @click="$root.navigator.toLogin"></div>
			</div>
			<div class="my-pay-wrap">
				<a class="my-pay-card">
					<i class="iconfont icon-yue"></i>余额:{{$root.balance}}
				</a>
				<a class="my-pay-card" @click="toRecharge">
					<i class="iconfont icon-chongzhi0101"></i>充值
				</a>
				<a class="my-pay-card" @click="toPickup">
					<i class="iconfont icon-tixian1"></i>提现
				</a>
			</div>
		</div>
		<ul class="func-list">
			<li class="func-item-wrap">
				<a class="func-item-link" href="orders.html">
					<div class="func-item-title">投注记录</div>
				</a>
			</li>
			<li class="func-item-wrap">
				<a class="func-item-link" @click="toRechargeHistory">
					<div class="func-item-title">充值记录</div>
				</a>
			</li>
			<li class="func-item-wrap">
				<a class="func-item-link" @click="toPickupHistory">
					<div class="func-item-title">提现记录</div>
				</a>
			</li>
			<li class="func-item-wrap">
				<a class="func-item-link" @click="setPassword">
					<div class="func-item-title">修改密码</div>
				</a>
			</li>
			<li class="func-item-wrap">
				<a class="func-item-link" @click="setAlipay">
					<div class="func-item-title">
						支付宝
						<span class="func-item-info" v-if="$root.alipay">
							{{$root.alipay}}
						</span>
					</div>
				</a>
			</li>
			<li class="func-item-wrap">
				<a class="func-item-link" @click="setWechat">
					<div class="func-item-title">
						微信
						<span class="func-item-info" v-if="$root.wechat">
							{{$root.wechat}}
						</span>
					</div>
				</a>
			</li>
			<!--li class="func-item-wrap">
				<a class="func-item-link">
					<div class="func-item-title">问题反馈</div>
				</a>
			</li-->
		</ul>
		<div class="logout-wrap signed" v-show="$root.signed">
			<input id="logout_btn" class="logout-btn" type="button" value="退出登录" @click="logout"></input>
		</div>
		<div id="pickup_wrap" class="layer">
			<div class="pickup-box">
				<div class="pickup-amount">
					<input type="number" id="pickup_amount" class="pickup-input" autofocus="autofocus">
					豆
					<a id="pickup_all">全部提现</a>
				</div>
				<a id="pickup_submit">确认提现</a>
				<div class="pickup-info">
					<p>1、提现数额必须为整数，且<span class="markup">单笔提现数额不能少于100</span></p>
					<p>2、提现服务将收取<span class="markup">2%的手续费</span>，手续费从账户余豆中扣除，余豆不足将无法提现</p>
					<p>3、手续费精确到整数位，如提现金额为124，124*2%=2.48，则将收取的手续费为3</p>
					<p>4、每个账号<span class="markup">每日限提现一次</span>，申请提现后取消依然会扣除当日的提现机会，请知悉</p>
					<p>5、点击全部提现，将自动为您计算扣除手续费后可提现的最大数额</p>
					<p>6、1个工作日内到账</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped src="./com.less"></style>
<script src="./com.js"></script>
