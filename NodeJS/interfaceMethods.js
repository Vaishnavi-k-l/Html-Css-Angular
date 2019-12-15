var p = {
    Fname: 'Vaish',
    age: 21,
    introduce: function (lastname) {
        console.log("Hello, I am " + this.Fname + " " + lastname + " ");
    }
};
p.introduce('KL');
console.log(p.Fname);
