import { Adress, Client, Cow } from "@prisma/client";
import { ClientResponse } from "../client/client.models";

export interface CowDto {
    earingNumber: string,
    ownerId: number
}

export class CowResponseWithOwner{
    constructor(cow: Cow & {owner: Client & {adress: Adress}}){
        this.earingNumber = cow.earingNumber;
        this.owner = new ClientResponse(cow.owner);
    }
    earingNumber: string;
    owner: ClientResponse;
}

export class CowResponse{
    constructor(cow: Cow) {
        this.earingNumber = cow.earingNumber;
    }
    earingNumber: string;
}