const zeroFix = n => {
	if (n < 10) {
		n = '0' + n;
	}
	return n;
};
export default v => {
	const d = new Date(v);
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const date = d.getDate();
	const hour = d.getHours();
	const minute = d.getMinutes();
	const second = d.getSeconds();
	return year + '-'
	+ zeroFix(month) + '-'
	+ zeroFix(date) + ' '
	+ zeroFix(hour) + ':'
	+ zeroFix(minute) + ':'
	+ zeroFix(second);
};