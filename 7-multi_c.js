const c = "C is fun";
const arg = process.argv[2];
const num = Number(arg);
if(!isNaN(num)){for(let i=0; i<num; i++){console.log(c);}}
else {console.log("Missing number of occurences")}
