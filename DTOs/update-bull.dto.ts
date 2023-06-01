import { IsString } from 'class-validator'

export class UpdateBullDto {
    @IsString()
    name?: string;
    @IsString()
    breedName?: string;
}