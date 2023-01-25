import { Client, Adress, Cow } from "@prisma/client";
import { CowResponse } from "../cow/cow.models";

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

export class ClientResponseWithCows {
    constructor(client: Client & {cows?: Cow[]}){
        this.id = client.id;
        this.name = client.name;
        this.secondName = client.secondName;
        this.cows = client.cows ? client.cows.map(cow => {
            return new CowResponse(cow);
        }) : []
    }
    id: number;
    name: string;
    secondName: string;
    cows: CowResponse[];
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