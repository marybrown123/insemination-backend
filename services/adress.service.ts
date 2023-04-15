import { CreateAdressDto } from "../DTOs/create-adress.dto";
import prisma from "../prisma";

export class AdressService {
    public async create(adress: CreateAdressDto) {
        return await prisma.adress.create({
            data: {
                city: adress.city,
                street: adress.street,
                streetNumber: adress.streetNumber,
                postCode: adress.postCode
            }
        })
    }
}