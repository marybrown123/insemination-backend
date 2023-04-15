import { IsString, ValidateNested } from 'class-validator/decorator/decorators'
import { CreateAdressDto } from './create-adress.dto';

export class CreateClientDto {
    @IsString()
    name!: string;
    @IsString()
    secondName!: string;
    @ValidateNested()
    adress!: CreateAdressDto;
}