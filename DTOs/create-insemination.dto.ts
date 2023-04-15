import { IsString, IsDate } from 'class-validator'

export class CreateInseminationDto {
    @IsString()
    cowEaringNumber!: string;
    @IsString()
    semenNumber!: string;
    @IsDate()
    date!: Date;
}