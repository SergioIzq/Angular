export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Smartphone with 6.5-inch display",
    price: 150,
}

const tablet: Product = {
    description: "iPad Air",
    price: 250,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
});

// console.log('Total:', total);
// console.log('Tax:', taxTotal);