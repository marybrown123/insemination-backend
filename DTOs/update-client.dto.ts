import { IsString, ValidateNested } from 'class-validator/decorator/decorators'
import { Type } from 'class-transformer';
import { UpdateAdressDto } from './update-adress.dto';

export class UpdateClientDto {
    @IsString()
    name?: string;
    @IsString()
    secondName?: string;
    @ValidateNested()
    @Type(() => UpdateAdressDto)
    adress?: UpdateAdressDto;
}