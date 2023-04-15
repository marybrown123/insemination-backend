import { Adress, Client, Cow } from "@prisma/client";
import { ClientResponse } from "../client/client.models";
import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator/decorator/decorators'

export class CowDto {
    @IsString()
    @MaxLength(14, {
        message: 'Numer kolczyka krowy musi mieć dokładnie 14 znaków!'
    })
    @MinLength(14, {
        message: 'Numer kolczyka krowy musi mieć dokładnie 14 znaków!'
    })
    earingNumber!: string;
    @IsNumber()
    ownerId!: number
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