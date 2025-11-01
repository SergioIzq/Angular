import type { Product } from "./06-function-destructuring";
import { taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150,
    },
    {
        description: 'iPad Air',
        price: 250,
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', taxTotal);