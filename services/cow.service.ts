import { CreateCowDto } from "../DTOs/create-cow.dto";
import { UpdateCowDto } from "../DTOs/update-cow.dto";
import prisma from "../prisma";
import { CowResponse } from "../responses/cow.response";

export class CowService {
    public async getByEaringNumber(earingNumber: string) {
        return await prisma.cow.findFirst({
            where: {
                earingNumber
            }
        })
    }

    public async create(cow: CreateCowDto) {
        const newCow = await prisma.cow.create({
            data: {
                earingNumber: cow.earingNumber,
                owner: {
                    connect: {
                        id: cow.ownerId
                    }
                }
            },
            include: {
                owner: {
                include: {
                    adress: true
                }
            }
        }})
        return new CowResponse(newCow);
    }

    public async delete(earingNumber: string) {
        return !!(await prisma.cow.delete({
            where: {
                earingNumber
            }
        }))
    }

    public async update(earingNumber: string, newCow: UpdateCowDto) {
        const updatedCow = await prisma.cow.update({
            where: {
                earingNumber,
            },
            data: {
                earingNumber: newCow.earingNumber,
            }
        })

        return new CowResponse(updatedCow);
    }
}