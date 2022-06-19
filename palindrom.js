let num = 151;
let temp = num;
let sum=0;
let newno =0 ;
while(num>0)
{
    let digit = (num%10);
    num = Math.floor(num/10)
    newno = newno*10 + digit
}
if(temp === newno)
    console.log("palindrom");
else 
    console.log("not a palindrom");