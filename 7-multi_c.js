const c = "C is fun";
const arg = process.argv[2];
const num = Number(arg);
if(isNaN(num)){console.log("Missing number of occurences");}
else 
{ for(let i = 0; i < num; i++)
{console.log(c);}}
