import { IsString, IsNumber } from 'class-validator'

export class CreateSemenDto {
    @IsString()
    number!: string;
    @IsNumber()
    bullId!: number;
}