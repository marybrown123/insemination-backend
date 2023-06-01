import { CreateAdressDto } from "../DTOs/create-adress.dto";
import { UpdateAdressDto } from "../DTOs/update-adress.dto";
import prisma from "../prisma";
import { AdressResponse } from "../responses/adress.response";

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

    public async update(adressId: number, newAdress: UpdateAdressDto) {
        const updatedAdress = await prisma.adress.update({
            where: {
                id: adressId,
            },
            data: {
                city: newAdress.city,
                street: newAdress.street,
                streetNumber: newAdress.streetNumber,
                postCode: newAdress.postCode,
            }
        })

        return new AdressResponse(updatedAdress);
    }
}