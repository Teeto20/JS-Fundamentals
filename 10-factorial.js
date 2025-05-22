const arg = Number(process.argv[2]); let fact = 1;
function factorial(a){if(isNaN(a)){return 1;}
else {for (let i=a; i>0; i--){
fact *= i;}}return fact;}
console.log(factorial(arg));

