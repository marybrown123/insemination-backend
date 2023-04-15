import { Bull, Semen } from "@prisma/client";
import { SemenResponse } from "./semen.response";

export class BullResponse {
    constructor(bull: Bull) {
        this.id = bull.id;
        this.name = bull.name;
        this.breedName = bull.breedName;
    }
    id: number;
    name: string;
    breedName: string;
}

export class BullResponseWithSemens extends BullResponse{
    constructor(bull: Bull & {semens?: Semen[]}){
        super(bull)
        this.semens = bull.semens ? bull.semens.map(semen => {
            return new SemenResponse(semen);
        }) : []
    }
    semens: SemenResponse[]
}