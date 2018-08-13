// 封装 bool-是否合法 desc-错误描述
const _validator = (bool, desc) => {

	if (bool) {
		return true;
	}
	else {
		alert(desc);
		return false;
	}
};
// 正则表达式
const _regTest = (param, reg, desc) => {

	return _validator(reg.test(param), desc);
};
// 是否有值
const _hasSet = (p, desc) => {

	return _validator(p ? true : false, desc);
};

export default {

	// 密码(8-16位非空白字符)
	password: p => {

		return _regTest(p, /^\S{8,16}$/, '请输入正确的密码格式(8-16位非空白字符)');
	},
	// 手机号
	phonenumber: p => {

		return _regTest(p, /^1\d{10}$/, '请输入正确的手机号');
	},
	// 短信验证码
	smscode: p => {

		return _regTest(p, /^\d{6}$/, '验证码无效');
	},
	// 支付宝
	alipay: p => {

		const regA = /^1\d{10}$/;
		const regB = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return _validator(regA.test(param) || regB.test(param), '请输入正确的支付宝账号');
	},
	// 微信
	wechat: p => {

		const regA = /^1\d{10}$/;
		const regB = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return _validator(regA.test(param) || regB.test(param), '请输入正确的微信账号');
	},
	// 提现金额
	pickupquota: p => {

		return _regTest(p, /^[1-9]\d*$/, '请输入正确的提现金额');
	},
};
