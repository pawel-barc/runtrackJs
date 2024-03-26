
function sommeNombresPremiers(num1,num2){
    if (num1%2==0 && num1 >2 || num1%3 ==0 && num1>3|| num1%5==0 && num1>5 && num2%2==0 && num2 >2 || num2%3 ==0 && num2>3|| num2%5==0 && num2>5){
        return true;

}
    else{
        return false;
    }
   
}   
let num1 = 4
let num2 = 4

console.log(sommeNombresPremiers(num1 + num2));
   
    