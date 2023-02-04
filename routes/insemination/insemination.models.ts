import { Adress, Bull, Client, Cow, Insemination, Semen } from "@prisma/client";
import { CowResponse, CowResponseWithOwner } from "../cow/cow.models";
import { SemenResponse, SemenResponseWithBull } from "../semen/semen.models";
import { IsString, IsDate } from 'class-validator'

export class InseminationDto {
    @IsString()
    cowEaringNumber!: string;
    @IsString()
    semenNumber!: string;
    @IsDate()
    date!: Date;
}

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