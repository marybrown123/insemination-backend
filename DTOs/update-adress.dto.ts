import { IsString } from 'class-validator/decorator/decorators'

export class UpdateAdressDto {
    @IsString()
    city?: string;
    @IsString()
    street?: string;
    @IsString()
    streetNumber?: string;
    @IsString()
    postCode?: string;
}