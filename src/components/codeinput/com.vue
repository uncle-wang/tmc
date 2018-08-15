<template>
	<div class="input-wrap pend">
		<input type="text" placeholder="短信验证码" :value="value" @input="$emit('input', $event.target.value)">
		<div class="code-wrap">
			<a id="code_btn" class="code-btn" @click="getCode" v-show="canGet">获取验证码</a>
			<span class="code-counter" v-show="!canGet">{{seconds}}秒</span>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import './../../base';
	.code-wrap {
		right: 5px;
		position: absolute;
		top: -1px;
		font-size: 14px;
		padding: 2px 0;
		color: @baseColor;
		width: 78px;
		text-align: right;
	}
</style>
<script>
	import {api, validator} from './../../service';
	export default {
		props: ['type', 'tel', 'value'],
		data: function() {
			return {
				counter: null,
				seconds: 60,
				canGet: true,
			};
		},
		methods: {
			startCount: function() {
				this.seconds = 60;
				this.canGet = false;
				this.counter = setInterval(() => {
					if (this.seconds <= 0) {
						clearInterval(this.counter);
						this.canGet = true;
					}
					else {
						this.seconds = this.seconds - 1;
					}
				}, 1000);
			},
			getCode: function() {
				if (!validator.phonenumber(this.tel)) {
					return;
				}
				api.sendSmscode(this.type, this.tel).then(() => {
					this.startCount();
				}).catch(status => {
					if (status === 2001) {
						alert('手机号已被注册');
					}
					else if (status === 2002) {
						alert('手机号不存在');
					}
					else if (status === 8002) {
						alert('验证码申请过于频繁，请稍后再试');
					}
					else {
						alert('请求异常，请稍后重试');
					}
				});
			},
		},
	};
</script>
