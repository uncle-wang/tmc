<template>
	<a class="back-link" :class="{white: white}" @click="$router.go(-1)">
		<i class="iconfont icon-fanhui1"></i>
		{{title}}
	</a>
</template>
<script>
	export default {
		props: {title: {default: '返回'}, white: {default: false}},
	};
</script>
<style lang="less" scoped>
	@import './../../base';
	.back-link {
		z-index: 3;
		position: fixed;
		left: 5px;
		top: 8px;
		font-size: 14px;
		color: @baseColor;
		&.white {
			color: #fff;
		}
	}
	.iconfont {
		position: relative;
		right: -4px;
		top: 1px;
	}
</style>
