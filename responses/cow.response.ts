import { Adress, Client, Cow } from "@prisma/client";
import { ClientResponse } from "./client.response";

export class CowResponse{
    constructor(cow: Cow) {
        this.earingNumber = cow.earingNumber;
    }
    earingNumber: string;
}

export class CowResponseWithOwner extends CowResponse{
    constructor(cow: Cow & {owner: Client & {adress: Adress}}){
        super(cow);
        this.owner = new ClientResponse(cow.owner);
    }
    owner: ClientResponse;
}