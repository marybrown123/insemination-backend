"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressResponse = exports.ClientResponseWithAdress = void 0;
class ClientResponseWithAdress {
    constructor(client) {
        this.id = client.id;
        this.name = client.name;
        this.secondName = client.secondName;
        this.adress = new AdressResponse(client.adress);
    }
}
exports.ClientResponseWithAdress = ClientResponseWithAdress;
class AdressResponse {
    constructor(adress) {
        this.city = adress.city;
        this.street = adress.street;
        this.streetNumber = adress.streetNumber;
        this.postalCode = adress.postCode;
    }
}
exports.AdressResponse = AdressResponse;
