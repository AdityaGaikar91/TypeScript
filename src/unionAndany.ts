let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'aisle';

const orders = ['12' , '20', '28', '42']


// avoid any

let currentorder: string | undefined;

for(let order in orders){
    if(order === '28'){
        currentorder = order
        break
    }
}

// currentorder = 42;

console.log(currentorder);
