import { IsString } from 'class-validator'

export class CreateBullDto {
    @IsString()
    name!: string;
    @IsString()
    breedName!: string;
}