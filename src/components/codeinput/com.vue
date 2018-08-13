<template>
	<div class="input-wrap pend">
		<input type="text" class="input" name="code" placeholder="短信验证码" :value="value" @input="$emit('input', $event.target.value)">
		<div class="code-wrap">
			<a id="code_btn" class="code-btn" @click="getCode" v-show="canGet">获取验证码</a>
			<span class="code-counter" v-show="!canGet">60秒</span>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import './../../base';
	.code-wrap {
		right: 2px;
		position: absolute;
		top: -1px;
		font-size: 14px;
		padding: 2px 0;
		color: @baseColor;
		width: 78px;
		text-align: center;
	}
</style>
<script>
	export default {
		props: ['type', 'value'],
		data: function() {
			return {
				canGet: true,
			};
		},
		methods: {
			getCode: function() {
				console.log('get');
			},
		},
	};
</script>
