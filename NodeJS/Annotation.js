var age = 32;
var empname = "Vaish";
var isUpdated = true;
// age ="someage";  Cannot assign a different TYPE of value. But can assign a number
age = 21;
console.log(typeof age);
console.log(typeof empname);
console.log(typeof isUpdated);
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
display(10, "Vaish");
