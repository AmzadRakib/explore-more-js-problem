const phones = [
    { name: 'sumsung', camera: '12mp', price: 32000, color: 'siver' },
    { name: 'Apple', camera: '12mp', price: 88000, color: 'siver' },
    { name: 'Xaomi', camera: '12mp', price: 30000, color: 'siver' },
    { name: 'Walton', camera: '12mp', price: 22000, color: 'siver' },
    { name: 'Oppo', camera: '12mp', price: 21000, color: 'siver' },
    { name: 'vivo', camera: '12mp', price: 20000, color: 'Golden' },
    { name: 'HTC', camera: '12mp', price: 66000, color: 'Black' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);