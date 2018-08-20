<template>
	<div class="wrap">
		<div v-show="empty===false" class="content">
			<div class="header">
				<a class="back" @click="$router.go(-1)"><i class="iconfont icon-fanhui1"></i></a>
				提现历史
			</div>
			<ul>
				<li class="item" v-for="(item, index) in pickupList">
					<div class="status">
						<span class="pending" v-if="item.status==='0'">正在处理</span>
						<a class="cancel-btn inline" v-if="item.status==='0'" @click="cancel(item)">取消</a>
						<span class="finished" v-if="item.status==='1'">已完成</span>
						<span class="cancel" v-if="item.status==='2'">已取消</span>
						<a class="cancel-btn inline" v-if="item.status==='2'" @click="remove(item.id, index)">删除</a>
					</div>
					<div class="time" v-if="item.status!=='1'">申请时间: {{item.create_time | date}}</div>
					<div class="time" v-if="item.status==='1'">完成时间: {{item.complete_time | date}}</div>
					<div class="quota">
						提现金额: 
						<span class="quota-num">{{item.quota}}</span>豆
						&nbsp;&nbsp;
						手续费: 
						<span class="quota-num">{{item.fees}}</span>豆
					</div>
					<div class="payment" v-if="item.alipay">
						收款账号: 
						<i class="iconfont icon-iconfontalipay"></i>
						{{item.alipay}}
					</div>
					<div class="payment" v-if="item.wechat">
						收款账号: 
						<i class="iconfont icon-wechat"></i>
						{{item.wechat}}
					</div>
				</li>
			</ul>
		</div>
		<div v-show="empty===true">
			<div class="empty">暂无提现记录</div>
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
				pickupList: [],
				empty: null,
			};
		},
		beforeMount: function() {
			api.getPickupHistory().then(pickupList => {
				if (pickupList.length > 0) {
					this.pickupList = pickupList;
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
			cancel: function(item) {
				if (!window.confirm('取消后手续费将一并退还至您的账户，确定？')) {
					return;
				}
				api.cancelPickup(item.id).then(balance => {
					item.status = '2';
					this.$store.commit('balance', balance);
				}).catch(status => {
					if (status === 1001) {
						alert('您未登录或登录已超时，请登录后重试');
						this.$store.commit('unsigned');
						navigator.toLogin();
					}
					else if (status === 3003) {
						alert('该订单状态发生改变，请您刷新页面后重试');
					}
					else {
						alert('请求异常，请稍后重试');
					}
				});
			},
			remove: function(id, index) {
				if (!window.confirm('删除后不可恢复，确定删除吗？')) {
					return;
				}
				api.removePickup(id).then(() => {
					this.pickupList.splice(index, 1);
					if (this.pickupList.length <= 0) {
						this.empty = true;
					}
				}).catch(status => {
					if (status === 1001) {
						alert('您未登录或登录已超时，请登录后重试');
						this.$store.commit('unsigned');
						navigator.toLogin();
					}
					else if (status === 3006) {
						alert('该订单状态发生改变，请您刷新页面后重试');
					}
					else {
						alert('请求异常，请稍后重试');
					}
				});
			},
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
	.cancel {
		color: gray;
	}
	.finished {
		color: @baseColor;
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
	.payment {
		margin-top: 8px;
	}
	.icon-iconfontalipay {
		color: @alipay;
	}
	.icon-wechat {
		color: @wechat;
	}
</style>
