module.exports = function getZerosCount(number) {
	
	var quantFive = Math.floor(number / 5);
	var res = quantFive;
	
	while (quantFive >= 5){
		quantFive = Math.floor(quantFive / 5);
		res = res + quantFive;
	}
	
	
	
	return res;
}
