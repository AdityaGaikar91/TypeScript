// class Chai{
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number){
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = 'masala'


class Chai{
    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients //ok
    }
}

class Shop {
    protected shopName = 'Chai corner'
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

// new Branch().getName        // This is how we can access "protected info"

const c = new Chai()
c.reveal() // THIS IS HOW WE CAN ACCESS PRIVATE INFO

// We can also write private like this using "#"
class Wallet {
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const w = new Wallet()

class Cup{
    readonly capacity: number = 250


    constructor(capacity:number){
        this.capacity = capacity
    }
}



class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value:number){
        if (value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const m = new ModernChai()
m.sugar = 3

class EkChai {
    static shopName = "Chaicode caffe"
    
    constructor(public flavour: string){}
}
console.log(EkChai.shopName);


// abstract class
abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai");
    }
}


class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat
    }
}