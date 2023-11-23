var isDate = function (input) {
  //   write your code here
	// if(typeof input === 'string'){
	// 	return !isNaN(new Date(input).getTime());
	// }else{
	// 	return input instanceof Date && !isNaN(input.getTime());
	// }

	return !isNaN(new Date(input));
};

// Do not change the code below. 
const input = prompt("Enter Date.");      
alert(isDate(input));  
