import { Bull, Semen } from "@prisma/client";
import { SemenResponse } from "../semen/semen.models";
import { IsString } from 'class-validator'

export class BullDto {
    @IsString()
    name!: string;
    @IsString()
    breedName!: string;
}

export class BullResponse {
    constructor(bull: Bull) {
        this.name = bull.name;
        this.breedName = bull.breedName
    }
    name: string;
    breedName: string;
}

export class BullResponseWithSemens {
    constructor(bull: Bull & {semens?: Semen[]}){
        this.name = bull.name;
        this.breedName = bull.breedName;
        this.semens = bull.semens ? bull.semens.map(semen => {
            return new SemenResponse(semen);
        }) : []
    }
    name: string;
    breedName: string;
    semens: SemenResponse[]
}