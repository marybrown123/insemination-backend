"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowResponse = exports.CowResponseWithOwner = void 0;
const client_models_1 = require("../client/client.models");
class CowResponseWithOwner {
    constructor(cow) {
        this.earingNumber = cow.earingNumber;
        this.owner = new client_models_1.ClientResponseWithAdress(cow.owner);
    }
}
exports.CowResponseWithOwner = CowResponseWithOwner;
class CowResponse {
    constructor(cow) {
        this.earingNumber = cow.earingNumber;
    }
}
exports.CowResponse = CowResponse;
