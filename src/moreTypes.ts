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

try {

} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}


const data:unknown = "chai aur code"
const strData: string = data as string

// ---------------- never ----------------------

type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role:Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role;
}