<template>
	<div class="wrap">
		<p class="page-title">修改密码</p>
		<form id="password_form" @submit.prevent="updatePassword">
			<div class="input-wrap"><input type="password" v-model="oldpassword" placeholder="请输入旧密码"></div>
			<div class="input-wrap"><input type="password" v-model="newpassword" placeholder="请输入新密码"></div>
			<div class="input-wrap"><input type="password" v-model="newpassword2" placeholder="请确认新密码"></div>
			<div class="btn-wrap"><input type="submit" class="button" value="确 定"></div>
		</form>
		<div class="btn-wrap"><a class="button outline" @click="$router.go(-1)">返 回</a></div>
	</div>
</template>
<script src="./com.js"></script>
<style lang="less" scoped>
	.btn-wrap {
		margin-top: 20px;
	}
</style>
