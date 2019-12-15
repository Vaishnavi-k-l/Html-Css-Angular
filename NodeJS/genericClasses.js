var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key: " + this.key + ", value: " + this.value);
    };
    return KeyValuePair;
}());
var obj = new KeyValuePair();
obj.setKeyValue(1, "Vaish");
obj.display();
var obj2 = new KeyValuePair();
obj2.setKeyValue("E1", "Advika");
obj2.display();
