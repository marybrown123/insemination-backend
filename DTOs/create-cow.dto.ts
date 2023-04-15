import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator/decorator/decorators'

export class CreateCowDto {
    @IsString()
    @MaxLength(14, {
        message: 'Numer kolczyka krowy musi mieć dokładnie 14 znaków!'
    })
    @MinLength(14, {
        message: 'Numer kolczyka krowy musi mieć dokładnie 14 znaków!'
    })
    earingNumber!: string;
    @IsNumber()
    ownerId!: number
}