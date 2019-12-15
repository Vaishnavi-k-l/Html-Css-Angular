var searchProducts = function (products, productToSearch) {
    return products.indexOf(productToSearch) >= 0;
};
var serachUsers = function (users, userToSearch) {
    return users.indexOf(userToSearch) >= 0;
};
console.log(searchProducts(['Laptop', 'Watch', 'Shoe'], 'Watch'));
console.log(serachUsers(['Ram', 'Bill', 'Bob'], 'Will'));
