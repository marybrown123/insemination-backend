import { IsString } from 'class-validator/decorator/decorators'

export class CreateAdressDto {
    @IsString()
    city!: string;
    @IsString()
    street!: string;
    @IsString()
    streetNumber!: string;
    @IsString()
    postCode!: string;
}