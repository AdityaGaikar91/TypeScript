let response: any = "42";

let numericLength: number = (response as string).length

type Book = {
    name: string
}
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement



// Unknow and any

let value:any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.tUppercase()

let newValue:unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5

if(typeof newValue === "string"){
    newValue.toUpperCase();
}
