import { Client, Adress, Cow } from "@prisma/client";
import { CowResponse } from "../cow/cow.models";
import { IsString, ValidateNested } from 'class-validator/decorator/decorators'

export class ClientDto {
    @IsString()
    name!: string;
    @IsString()
    secondName!: string;
    @ValidateNested()
    adress!: AdressDto;
}

export class AdressDto {
    @IsString()
    city!: string;
    @IsString()
    street!: string;
    @IsString()
    streetNumber!: string;
    @IsString()
    postCode!: string;
}

export class ClientResponse {
    constructor(client: Client & {cows?: Cow[]} & {adress: Adress}){
        this.id = client.id;
        this.name = client.name;
        this.secondName = client.secondName;
        this.adress = new AdressResponse(client.adress); 
        this.cows = client.cows ? client.cows.map(cow => {
            return new CowResponse(cow);
        }) : []
    }
    id: number;
    name: string;
    secondName: string;
    cows: CowResponse[];
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