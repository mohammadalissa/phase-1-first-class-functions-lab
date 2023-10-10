// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    let newArr = arr.slice(0,2)
    return newArr

}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// console.log(returnFirstTwoDrivers(drivers))
const returnLastTwoDrivers = function(arr){
    let newArr = arr.slice(arr.length-2,arr.length)
    return newArr

}
// console.log(returnLastTwoDrivers(drivers))
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(int){
    return (function(para){
        return para * int
    })

}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arr,func){
    return func(arr)
}