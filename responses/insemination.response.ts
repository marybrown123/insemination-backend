import { Adress, Bull, Client, Cow, Insemination, Semen } from "@prisma/client";
import { CowResponseWithOwner } from "./cow.response";
import { SemenResponseWithBull } from "./semen.response";

export class InseminationResponse {
    constructor (insemination: Insemination & {cow: Cow & {owner: Client & {adress: Adress}}} & {semen: Semen & {bull: Bull}}) {
        this.cow = new CowResponseWithOwner(insemination.cow)
        this.semen = new SemenResponseWithBull(insemination.semen)
        this.date = insemination.date;
    }
    cow: CowResponseWithOwner;
    semen: SemenResponseWithBull;
    date: Date;
}