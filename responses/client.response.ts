import { Adress, Client, Cow } from "@prisma/client";
import { AdressResponse } from "./adress.response";
import { CowResponse } from "./cow.response";

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