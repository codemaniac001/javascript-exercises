const add = function(num1, num2) {
	sum1=num1 + num2;
  return(sum1)
};

const subtract = function(num1, num2) {
 sub=num1-num2;
	
  return(sub)
};

const sum = function(arr) {
  let sum1=0;
  arr.forEach((item) => {
    sum1=sum1+item
  })
	return(sum1)
};

const multiply = function(arr) {
  let mul=1;
  arr.forEach((item) => {
    mul=mul*item
  })
  return(mul)
};

const power = function(base,expo) {
	pow= base ** expo
  return(pow)
};

const factorial = function(n) {
	let mul=1;
  if(n==0||n==1)
  {
    return(1);
  }
  else{
    for(i=1;i<=n;i++){
      mul=mul*i;
    }
  }
  return(mul)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
