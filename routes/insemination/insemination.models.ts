import { Adress, Bull, Client, Cow, Insemination, Semen } from "@prisma/client";
import { CowResponse, CowResponseWithOwner } from "../cow/cow.models";
import { SemenResponse, SemenResponseWithBull } from "../semen/semen.models";

export interface InseminationDto {
    cowEaringNumber: string,
    semenNumber: string
}

export class InseminationResponse {
    constructor (insemination: Insemination & {cow: Cow} & {semen: Semen}) {
        this.cow = new CowResponse(insemination.cow)
        this.semen = new SemenResponse(insemination.semen)
    }
    cow: CowResponse;
    semen: SemenResponse;
}

export class InseminationResponseWithALlData {
    constructor (insemination: Insemination & {cow: Cow & {owner: Client & {adress: Adress}}} & {semen: Semen & {bull: Bull}}) {
        this.cow = new CowResponseWithOwner(insemination.cow)
        this.semen = new SemenResponseWithBull(insemination.semen)
    }
    cow: CowResponseWithOwner;
    semen: SemenResponseWithBull;
}