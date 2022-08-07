const shoppingCart = [
    { name: 'shoe', price: 1200, quainty: 2},
    { name: 'shirt', price: 2200, quainty: 5},
    { name: 'pant', price: 3700, quainty: 4},
    { name: 'belt', price: 600, quainty: 3 },
];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quainty;
        // sum = sum + product.price;
        sum = sum + productTotal;
    }
    return sum;
} 
const expense = totalCost(shoppingCart);
console.log(expense);  
