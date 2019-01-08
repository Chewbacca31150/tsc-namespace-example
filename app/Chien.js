"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
var Chien;
(function (Chien) {
    class Enumerer {
        constructor() {
            this.felin = new Animal_1.Animal.Felin();
        }
        enumere() {
            console.log(this.felin.compter());
        }
    }
    Chien.Enumerer = Enumerer;
})(Chien = exports.Chien || (exports.Chien = {}));
