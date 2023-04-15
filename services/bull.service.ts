import { CreateBullDto } from "../DTOs/create-bull.dto";
import prisma from "../prisma";
import { BullResponse, BullResponseWithSemens } from "../responses/bull.response";

export class BullService {
    public async getByName(name: string) {
        return await prisma.bull.findFirst({
            where: {
                name
            }
        })
    }

    public async getById(id: number) {
        return await prisma.bull.findFirst({
            where: {
                id
            }
        })
    }

    public async create(bull: CreateBullDto) {
        const newBull = await prisma.bull.create({
            data: {
                name: bull.name,
                breedName: bull.breedName
            }
        })
        return new BullResponse(newBull);
    }

    public async list() {
        const bullList = await prisma.bull.findMany({
            include: {
                semens: true
            }
        })
        return bullList.map(bull => {
            return new BullResponseWithSemens(bull)
        })
    }

    public async delete(id: number) {
        return !!(await prisma.bull.delete({
            where: {
                id
            }
        }))
    }
}