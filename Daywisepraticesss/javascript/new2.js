function array1(...num){
    console.log(num)
}
array1(2,3,4)
function array2(...num2){
    console.log(num2)
    console.log(num2.reduce((a,b)=>a+b))
}
array2(5,7,4)