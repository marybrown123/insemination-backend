"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemenResponse = exports.SemenResponseWithBull = void 0;
const bull_models_1 = require("../bull/bull.models");
class SemenResponseWithBull {
    constructor(semen) {
        this.number = semen.number;
        this.bull = new bull_models_1.BullResponse(semen.bull);
    }
}
exports.SemenResponseWithBull = SemenResponseWithBull;
class SemenResponse {
    constructor(semen) {
        this.number = semen.number;
    }
}
exports.SemenResponse = SemenResponse;
