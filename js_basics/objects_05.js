const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

if (appleStore.length === 0) {
    console.log('This store is empty! NO PRODUCT')
}
else {
    let most_expensive = appleStore[0];
    let most_affordable = appleStore[0];
    let biggest_quantity = appleStore[0];
    let lowest_quantity = appleStore[0];
    const all_product_names = [];

    for (const product of appleStore) {
        if (product.price > most_expensive.price) most_expensive = product;
        if (product.price < most_affordable.price) most_affordable = product;
        if (product.quantity > biggest_quantity.quantity) biggest_quantity = product;
        if (product.quantity < lowest_quantity.quantity) lowest_quantity = product;
        all_product_names.push(product.productName);
    }

    console.log(most_expensive.productName);
    console.log(most_affordable.productName);
    console.log(biggest_quantity.productName);
    console.log(lowest_quantity.productName);
    console.log(all_product_names)
}