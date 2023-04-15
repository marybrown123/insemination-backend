import { CreateSemenDto } from "../DTOs/create-semen.dto";
import prisma from "../prisma";
import { SemenResponse } from "../responses/semen.response";

export class SemenService {
    public async getByNumber(number: string) {
        return await prisma.semen.findFirst({
            where: {
                number
            }
        })
    }

    public async create(semen: CreateSemenDto) {
        const newSemen = await prisma.semen.create({
            data: {
                number: semen.number,
                bull: {
                    connect: {
                        id: semen.bullId
                    }
                }
            },
            include: {
                bull: true
            }
        })
        return new SemenResponse(newSemen);
    }

    public async delete(number: string) {
        return !!(await prisma.semen.delete({
            where: {
                number
            }
        }))
    }
}