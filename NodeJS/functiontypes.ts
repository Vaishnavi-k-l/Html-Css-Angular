interface ContainsItem
{
    (item: string[], itemToSearch: string): boolean;
}

const searchProducts : ContainsItem = 
(products : string[], productToSearch: string): boolean => 
{
      return products.indexOf(productToSearch) >= 0;
}

const serachUsers : ContainsItem =
(users : string[], userToSearch : string): boolean =>
{
    return users.indexOf(userToSearch) >= 0;
}

console.log(searchProducts(
        ['Laptop', 'Watch', 'Shoe'],
        'Watch'                                  // returns true
    ));
    
console.log(serachUsers(
        ['Ram', 'Bill', 'Bob'],                 //returns false
        'Will'
    ));

    