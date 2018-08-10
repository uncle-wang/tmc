<template>
	<div class="back-wrap">
		<a class="back-link" @click="$router.go(-1)">
			<i class="iconfont icon-web-icon-"></i>
			{{title}}
		</a>
	</div>
</template>
<script>
	export default {
		props: {title: {default: '返回'}},
	};
</script>
<style lang="less" scoped>
	@import './../../base';
	.back-wrap {
		color: @baseColor;
		padding: 8px 6px;
		font-size: 14px;
		height: 26px;
		line-height: 19px;
	}
	.iconfont {
		font-size: 22px;
		position: relative;
		right: -4px;
		top: 2px;
	}
</style>
