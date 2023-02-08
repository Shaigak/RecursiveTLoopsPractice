"use strict"

// function getNumbers(num){

//     debugger

//     let number =num-1;

//     if(number>0){
//         getNumbers(number)
//     }

//     console.log(num);

// }
// getNumbers(10);

// function SumOfNums(num){

//     if(num==1){
//         return num;
//     }else{
//         return num+SumOfNums(num-1)
//     }
// }
// console.log(SumOfNums(5))

// let numbers=[11,12,5,2,3,8,5]

// numbers.forEach((element,index,arr) => {

//    numbers[index]=element*2    
// });

// console.log(numbers)

// for (const item of  numbers) {

//     console.log(item)

// }

// let user1={
//     id:1,
//     name:"Mirze",
//     surname:"Beshirzade"

// }

// let user2={
//     id:2,
//     name:"Saiq",
//     surname:"Kazimov"

// }

// let user3={
//     id:3,
//     name:"Elekber",
//     surname:"Hesenov"

// }

// let user4={
//     id:4,
//     name:"Mirze",
//     surname:"Beshirzade"

// }

// let users=[user1,user2,user3,user4];

// let count=0;

// for (const user of users) {

//     // for (const key in user) { 
//     //     // console.log('Key : ${key}, Value: ${user[key]}')
//     // }

//     if(user.name=="Mirze" && user.surname=="Beshirzade"){
//         count++
//     }
// }
// console.log(count)

// let nums1=[1,4,6,8,9,11]

// console.log(nums1)

//  let num2=nums1;

// num2[0]=100;

// console.log(nums1)


// let newArr=nums1.map(m=>{
//    return m*2;
// })

// console.log(nums1)


// function numsOfOdd(num) {

// return num % 2 != 0

// }

// let numsofOdd = n => {
//     return n % 2 != 0

// }

// function numsOfEven(num) {
//     return num % 2 == 0

// }

// function numsOfGreaterThanFive(num) {
//     return num > 5

// }

// function calculateNums(arr, callback) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i])) {
//             sum += arr[i]
//         }

//     }
//     console.log(sum)

// }





// function sumOfOdd(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 != 0) {
//             sum += arr[i]
//         }

//     }
//     console.log(sum)
// }

// function sumOfEven(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             sum += arr[i]
//         }

//     }

//     console.log(sum)

// }

// function sumOfGraterThanFive(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > 5) {
//             sum += arr[i]
//         }

//     }
//     console.log(sum)
// }

// sumOfOdd(nums)
// sumOfEven(nums)
// sumOfGraterThanFive(nums)

// let nums = [1, 4, 6, 8, 9, 11];

// calculateNums(nums, (m) => m % 2 != 0 && n>3)


// calculateNums(nums, numsofOdd)
// calculateNums(nums, numsOfEven)
// calculateNums(nums, numsOfGreaterThanFive)



let user1={
    id:1,
    name:"Mirze",
    surname:"Beshirzade",
    age:21

}

let user2={
    id:2,
    name:"Saiq",
    surname:"Kazimov",
    age:23

}

let user3={
    id:3,
    name:"Elekber",
    surname:"Hesenov",
    age:29

}

let user4={
    id:4,
    name:"Mirze",
    surname:"Beshirzade",
    age:31

}

let users=[user1,user2,user3,user4];

// function showUsersByAge(people,callback){

// for (const item of people) {

//     if(callback(item.age)){
//         console.log(item.name +" "+ item.surname)
//     }  
// }

// }
// showUsersByAge(users,m=>m>25)


let filteredDatas=users.filter(m=>m.age>20)
let sumOfAge=0;

for(const item of filteredDatas){

    sumOfAge+=item.age
    
}

console.log(sumOfAge)


const getSumOfAgesFromFilteredDatas=datas=>{

    let sumOfAge=0;

for(const item of datas){

    sumOfAge+=item.age
    
}

console.log(sumOfAge)

}

getSumOfAgesFromFilteredDatas(filteredDatas)