let result = 80;

if(result >= 0 && result <= 32){
  console.log("Fail");
}
else if(result >= 33 && result <= 39){
  console.log("C");
}
else if(result >= 40 && result <= 59){
  console.log("B");
}
else if(result >= 60 && result <= 69){
  console.log("A-");
}
else if(result >= 70 && result <= 79){
  console.log("A");
}
else if(result >= 80 && result <= 100){
  console.log("A+");
}
else{
  console.log("invalid");
}



let n = 32;

if(n % 2 === 0){
  console.log("Even");
}
else if (n % 2 === 1){
  console.log("Odd");
}
else{
  console.log("Invalid");
}




function compareNumbers(a, b) {
  return a - b;
}
const array = [
  16, 7, 11, 3, 17, 19, 10, 12, 4, 13, 15, 8, 2, 5, 20, 1, 9, 18, 6, 4,
];
array.sort(compareNumbers);
console.log(array);




function checkLeap(y){
  if(y%4 === 0 && (y%100 !== 0 || y%400 === 0)){
    return true;
  }else{
    return false;
  }
}
function showLeap(y){
  if(checkLeap(y)){
    console.log(y+" is a leap year.");
  }
  else{
    console.log(y+" is not a leap year.");
  }
}
showLeap(2020);
showLeap(2025);
showLeap(2090);




let nums=[];
for(let i=1;i<=50;i++){
  nums.push(i);
}
function isBoth(n){
  if(n%3===0 && n%5===0){
    return true;
  }else{
    return false;
  }
}
let resultt=[];
for(let j=0;j<nums.length;j++){
  if(isBoth(nums[j])){
    resultt.push(nums[j]);
  }
}
console.log("Multiples of 3 and 5 between 1 and 50:",resultt);





var fnds = ["rahim","karim","abdul","sadsd","heroAlom"];
var longest="";
for(var i=0;i<fnds.length;i++){
  if(fnds[i].length>longest.length){
    longest=fnds[i];
  }
}
console.log("Longest name:",longest);



var num=[1,2,3,3,4,4,5,6,7,8,9,10];
var unique=[];
for(var i=0;i<num.length;i++){
  var found=false;
  for(var j=0;j<unique.length;j++){
    if(num[i]===unique[j]){
      found=true;
      break;
    }
  }
  if(!found){
    unique.push(num[i]);
  }
}
console.log("Unique numbers:",unique);




var myNumbers=[1,2,3,4,5,6,7,8,9,10];
var maximum=myNumbers[0];
for(var i=1;i<myNumbers.length;i++){
  if(myNumbers[i]>maximum){
    maximum=myNumbers[i];
  }
}
console.log("Maximum number:",maximum);

