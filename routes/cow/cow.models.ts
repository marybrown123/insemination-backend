import { Adress, Client, Cow } from "@prisma/client";
import { ClientResponseWithAdress } from "../client/client.models";

export interface CowDto {
    earingNumber: string,
    ownerId: number
}

export class CowResponseWithOwner{
    constructor(cow: Cow & {owner: Client & {adress: Adress}}){
        this.earingNumber = cow.earingNumber;
        this.owner = new ClientResponseWithAdress(cow.owner);
    }
    earingNumber: string;
    owner: ClientResponseWithAdress;
}

export class CowResponse{
    constructor(cow: Cow) {
        this.earingNumber = cow.earingNumber;
    }
    earingNumber: string;
}