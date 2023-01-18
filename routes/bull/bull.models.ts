import { Bull, Semen } from "@prisma/client";
import { SemenResponse } from "../semen/semen.models";

export interface BullDto {
    name: string,
    breedName: string
}

export class BullResponse {
    constructor(bull: Bull) {
        this.name = bull.name;
        this.breedName = bull.breedName
    }
    name: string;
    breedName: string;
}