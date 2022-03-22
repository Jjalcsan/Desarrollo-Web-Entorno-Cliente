"use strict";
exports.__esModule = true;
exports.calculo = void 0;
var calculo = /** @class */ (function () {
    function calculo(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    calculo.prototype.suma = function (a, b, c, d) {
        return (a + b + c + d);
    };
    calculo.prototype.resta = function (a, b) {
        return (a - b);
    };
    return calculo;
}());
exports.calculo = calculo;
