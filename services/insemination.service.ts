import { CreateInseminationDto } from "../DTOs/create-insemination.dto";
import prisma from "../prisma";
import { InseminationResponse } from "../responses/insemination.response";

export class InseminationService {
    public async create(insemination: CreateInseminationDto) {
        const newInsemination = await prisma.insemination.create({
            data: {
                cow: {
                    connect: {
                        earingNumber: insemination.cowEaringNumber
                    }
                },
                semen: {
                    connect: {
                        number: insemination.semenNumber
                    }
                },
                date: insemination.date
            },
            include: {
                cow: {
                    include: {
                        owner: {
                            include: {
                                adress: true
                            }
                        }}
                },
                semen: {
                    include: {
                        bull: true
                    }
                }
            }
        })
        return new InseminationResponse(newInsemination);
    }

    public async get() {
        const inseminationList = await prisma.insemination.findMany({
            include: {
                cow: {
                    include: {
                        owner: {
                            include: {
                                adress: true
                            }
                        }}
                },
                semen: {
                    include: {
                        bull: true
                    }
                }
            }
        })
        return inseminationList.map(insemination => {
            return new InseminationResponse(insemination);
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
        return !!(await prisma.insemination.delete({
            where: {
                id
            }
        }))
    }
}