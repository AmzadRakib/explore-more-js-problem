const shoppingCard = [
    { name: 'shoe', price: 1200, quantity: 3 },
    { name: 'T-Shirt', price: 2200, quantity: 2 },
    { name: 'Pant', price: 3000, quantity: 4 },
    { name: 'Belt', price: 600, quantity: 5 },
]

function totalCoast(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCoast(shoppingCard);
console.log('Your Total Amaount Is :', expense);