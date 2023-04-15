import { CreateClientDto } from "../DTOs/create-client.dto";
import { AdressService } from "./adress.service";
import prisma from "../prisma";
import { ClientResponse } from "../responses/client.response";

const adressService = new AdressService();

export class ClientService {
    public async create(client: CreateClientDto) {
        const adress = await adressService.create(client.adress)
        const newClient = await prisma.client.create({
            data: {
                name: client.name,
                secondName: client.secondName,
                adress: {
                    connect: {
                        id: adress.id
                    }
                }
            },
            include: {
                adress: true
            }
        })
        return new ClientResponse(newClient);
    }

    public async list() {
        const clientList = await prisma.client.findMany({
            include: {
                adress: true,
                cows: true
            }
        });
        return clientList.map(client => {
            return new ClientResponse(client)
        })
    }

    public async getById(id: number) {
        return await prisma.client.findFirst({
            where: {
                id
            }
        })
    }

    public async delete(id: number) {
        return !!(await prisma.client.delete({
            where: {
                id
            }
        }))
    }
}