var isDate = function (input) {
  //   write your code here
	if(typeof input === 'string'){
		return !isNaN(Date.parse(input));
	}else if(input instanceof Date){ 
		return !isNaN(input.getTime());
	}else{  
		return false;  
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");  
alert(isDate(input));  
