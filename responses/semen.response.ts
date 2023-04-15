import { Bull, Semen } from "@prisma/client";
import { BullResponse } from "./bull.response";

export class SemenResponse {
    constructor(semen: Semen) {
        this.number = semen.number;
    }
    number: string;
}

export class SemenResponseWithBull extends SemenResponse{
    constructor(semen: Semen & {bull: Bull}) {
        super(semen);
        this.bull = new BullResponse(semen.bull);
    }
    bull: BullResponse;
}