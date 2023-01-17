"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InseminationResponseWithALlData = exports.InseminationResponse = void 0;
const cow_models_1 = require("../cow/cow.models");
const semen_models_1 = require("../semen/semen.models");
class InseminationResponse {
    constructor(insemination) {
        this.cow = new cow_models_1.CowResponse(insemination.cow);
        this.semen = new semen_models_1.SemenResponse(insemination.semen);
    }
}
exports.InseminationResponse = InseminationResponse;
class InseminationResponseWithALlData {
    constructor(insemination) {
        this.cow = new cow_models_1.CowResponseWithOwner(insemination.cow);
        this.semen = new semen_models_1.SemenResponseWithBull(insemination.semen);
    }
}
exports.InseminationResponseWithALlData = InseminationResponseWithALlData;
