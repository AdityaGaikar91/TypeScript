var num1:number = 10;
var num2:number = 20;
var num3:number = 30;

var total:number = num1 + num3;
console.log(total);


var octal:number = 0o100001;
var hexa: number = 0b000001;
var binary:number = 0x00001;

console.log(octal+10);

var item:number = 100;
var item2 = "50";

// var item2Converted = Number(item2) // Method 1: to convert string into number
var item2Converted = item2
console.log(item+ +item2);

// var data = 30;
// data = 40;
// data = 'Aditya';

var data: number | string = 30;
data = 'anil';