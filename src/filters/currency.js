export default value => {
	let result = '';
	let num = '';
	const reg = /^[0-9]+/;
	value = value.toString();
	num = value.match(reg)[0];
	while (num.length > 3) {
		result = ',' + num.substr(num.length - 3) + result;
		num = num.substring(0, num.length - 3);
	}
	result = num + result;
	return result;
};
