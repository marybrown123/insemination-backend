import { Client, Adress, Cow } from "@prisma/client";

export interface ClientDto {
    name: string,
    secondName: string,
    adress: AdressDto
}

export interface AdressDto {
    city: string,
    street: string
    streetNumber: string
    postCode: string
}

export class ClientResponseWithAdress {
    constructor(client: Client & {adress: Adress}){
        this.id = client.id;
        this.name = client.name;
        this.secondName = client.secondName;
        this.adress = new AdressResponse(client.adress); 
    }
    id: number;
    name: string;
    secondName: string;
    adress: AdressResponse;
}

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