<template>
	<button class="btn" @click="$emit('click')">
		<span v-show="!loading"><slot></slot></span>
		<span class="btn-text" v-show="!loading">{{text}}</span>
		<span class="loading"><i class="iconfont icon-jiazai" v-show="loading"></i></span>
	</button>
</template>
<script>
	export default {
		props: ['text', 'loading']
	};
</script>
<style lang="less" scoped>
	@import './../../base';
	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.btn {
		border: none;
		outline: none;
		width: 140px;
		height: 40px;
		line-height: 40px;
		border-radius: 5px;
		margin: 24px auto 0;
		display: block;
		font-size: 18px;
		color: #fff;
		text-align: center;
		text-decoration: none;
		background: @baseColor;
		&.alipay {
			background: #13aeec;
		}
		&.wechat {
			background: #00af41;
		}
		&[disabled] {
			background: #ccc;
		}
		& + .btn {
			margin-top: 12px;
		}
		.iconfont {
			font-size: 20px;
			margin-right: 2px;
			&.icon-jiazai {
				margin-right: 0;
			}
		}
	}
	.loading {
		display: inline-block;
		-webkit-animation: spin 1s linear infinite;
		animation: spin 1s linear infinite;
	}
</style>
