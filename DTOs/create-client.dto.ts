import { IsString, ValidateNested } from 'class-validator/decorator/decorators'
import { CreateAdressDto } from './create-adress.dto';
import { Type } from 'class-transformer';

export class CreateClientDto {
    @IsString()
    name!: string;
    @IsString()
    secondName!: string;
    @ValidateNested()
    @Type(() => CreateAdressDto)
    adress!: CreateAdressDto;
}