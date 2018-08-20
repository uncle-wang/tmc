<template>
	<div class="wrap">
		<div v-show="empty===false" class="content">
			<div class="header">
				<a class="back" @click="$router.go(-1)"><i class="iconfont icon-fanhui1"></i></a>
				充值历史
			</div>
			<ul>
				<li class="item" v-for="(item, index) in rechargeList">
					<div class="status">
						<span class="pending" v-if="item.status==='0'">等待付款</span>
						<a class="cancel-btn inline" v-if="item.status==='0'">
							<i class="iconfont icon-bangzhu"></i>遇到问题
						</a>
						<span class="finished" v-if="item.status==='1'">已完成</span>
					</div>
					<div class="time">订单时间: {{item.create_time | date}}</div>
					<div class="quota">
						充值金额: 
						<span class="quota-num">{{item.quota}}</span>元
					</div>
					<a class="btn pay-form-btn" @click="showPayForm(item.id)" v-if="item.status==='0'">去支付</a>
				</li>
			</ul>
		</div>
		<div v-show="empty===true">
			<div class="empty">暂无充值记录</div>
			<a class="btn outline" @click="$router.go(-1)">返回</a>
		</div>
	</div>
</template>
<script>
	import {api} from './../../service';
	import {navigator} from './../../router';
	export default {
		data: function() {
			return {
				rechargeList: [],
				empty: null,
			};
		},
		beforeMount: function() {
			api.getRechargeHistory().then(rechargeList => {
				if (rechargeList.length > 0) {
					this.rechargeList = rechargeList;
					this.empty = false;
				}
				else {
					this.empty = true;
				}
			}).catch(status => {
				this.empty = true;
				if (status === 1001) {
					alert('您未登录或登录已超时，请登录后重试');
					this.$store.commit('unsigned');
					navigator.toLogin();
				}
				else {
					alert('请求异常，请稍后再试');
				}
			});
		},
		methods: {
			showPayForm: function() {},
		}
	};
</script>
<style lang="less" scoped>
	@import './../../base';
	.content {
		padding-top: 42px;
	}
	.header {
		color: #fff;
		text-align: center;
		line-height: 42px;
		font-size: 18px;
		background-color: @baseColor;
		height: 42px;
		position: fixed;
		z-index: 2;
		left: 0;
		right: 0;
		top: 0;
	}
	.back {
		top: 0;
		left: 0;
		text-align: center;
		line-height: 42px;
		position: absolute;
		height: 42px;
		width: 42px;
	}
	.empty {
		padding-top: 200px;
		text-align: center;
		color: #b3b3b3;
	}
	.item {
		color: gray;
		font-size: 14px;
		border: 1px solid #ececec;
		border-radius: 5px;
		margin-top: 18px;
		background-color: #f7f7f7;
		padding: 4px 8px 10px;
		position: relative;
	}
	.status {
		font-size: 13px;
		border-bottom: 1px solid #ececec;
		padding-bottom: 3px;
	}
	.finished {
		color: gray;
	}
	.pending {
		color: #ff5722;
	}
	.cancel-btn {
		color: #2196F3;
		position: absolute;
		right: 8px;
		top: 4px;
	}
	.icon-bangzhu {
		position: relative;
		top: 1px;
	}
	.time {
		margin-top: 10px;
	}
	.quota {
		margin-top: 5px;
	}
	.quota-num {
		color: #ff5722;
		font-size: 18px;
	}
	.icon-iconfontalipay {
		color: @alipay;
	}
	.icon-wechat {
		color: @wechat;
	}
	.pay-form-btn {
		width: 60px;
		height: 24px;
		font-size: 14px;
		line-height: 24px;
		border-radius: 3px;
		background: #ff5722;
		color: #fff;
		margin-top: 0;
		position: absolute;
		right: 8px;
		top: 47px;
	}
</style>
