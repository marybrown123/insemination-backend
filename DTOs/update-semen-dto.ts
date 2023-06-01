import { IsString } from 'class-validator'

export class UpdateSemenDto {
    @IsString()
    number?: string;
}