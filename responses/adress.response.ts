import { Adress } from "@prisma/client";

export class AdressResponse {
    constructor(adress: Adress){
        this.city = adress.city;
        this.street = adress.street;
        this.streetNumber = adress.streetNumber;
        this.postalCode = adress.postCode;
    }
    city: string;
    street: string;
    streetNumber: string;
    postalCode: string;
}