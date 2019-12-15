var Validation;
(function (Validation) {
    var PinValidator = /** @class */ (function () {
        function PinValidator() {
        }
        PinValidator.prototype.isValid = function (s) {
            return s.length === 6;
        };
        return PinValidator;
    }());
    Validation.PinValidator = PinValidator;
    var p1 = new PinValidator();
    console.log(p1.isValid("5276782"));
})(Validation || (Validation = {}));
