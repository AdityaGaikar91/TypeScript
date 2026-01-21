interface Chai{
    flavor: string
    price: number
    milk?: boolean;
}

const masala:Chai = {
    flavor: "masala",
    price: 30
};

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: " Chaicode caffe"}
// s.id = 2

interface DiscountCalculator{
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5


interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start tea machine");
    },
    stop(){
        console.log("stop the machine");
    }
}


// -------- index signatures ------------
interface ChaiRatings{
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

// ----------------- Merging --------------------

interface User{
    name: string
}

interface User{
    age:number
}

const u: User = {
    name: "Aditya",
    age: 20
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}