console.log("node.js started")


const arr1=[1,2,3]
const arr2=[...arr1,4,5,6]
console.log(arr2)

const user = {name:"rajasri"}; 
const updatedUser = {...user, age:22}; 
console.log(updatedUser);
const obj={
    n:"kalyan",
  s:"node"
};
const obj2={
    ...obj,
    course:"aiml"
}
console.log(obj2);