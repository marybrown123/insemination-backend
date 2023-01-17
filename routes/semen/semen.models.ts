import { Bull, Semen } from "@prisma/client";
import { BullResponse } from "../bull/bull.models";

export interface SemenDto {
    number: string,
    bullId: string
}

export class SemenResponseWithBull {
    constructor(semen: Semen & {bull: Bull}) {
        this.number = semen.number;
        this.bull = new BullResponse(semen.bull)
    }
    number: string;
    bull: BullResponse;
}

export class SemenResponse {
    constructor(semen: Semen) {
        this.number = semen.number;
    }
    number: string;
}

