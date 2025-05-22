const arg = Number(process.argv[2]); let fact = 1;
function factorial(a){if(isNaN(a)|| a === 0){return 1;}
else {fact = a*factorial(a-1)}return fact;}
console.log(factorial(arg));

