var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var C5 = /** @class */ (function () {
    function C5() {
    }
    return C5;
}());
var C3 = /** @class */ (function (_super) {
    __extends(C3, _super);
    function C3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C3.prototype.fun1 = function () {
        console.log(this.id1);
    };
    C3.prototype.fun2 = function () {
        console.log(this.id2);
    };
    C3.prototype.fun3 = function () {
        console.log(this.id3);
    };
    return C3;
}(C5));
