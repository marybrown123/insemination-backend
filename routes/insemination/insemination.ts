import express, { Request, Response, Router } from "express";
import { isMemberName } from "typescript";
import prisma from "../../prisma";
import { InseminationDto, InseminationResponse } from "./insemination.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const insemination: InseminationDto = req.body;
    const inseminationFromDb = await prisma.insemination.create({
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
    res.json(new InseminationResponse(inseminationFromDb));
})

router.get("/list", async (req: Request, res: Response) => {
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
    inseminationList.map(insemination => {
        return new InseminationResponse(insemination);
    })
    res.json(inseminationList);
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const inseminationId: number = Number(req.params.id);
    const inseminationFromDb = await prisma.client.findFirst({
        where: {
            id: inseminationId
        }
    })
    if(!inseminationFromDb){
        return res.status(404).send("Insemination does not exist");
    }
    await prisma.client.delete({
        where: {
            id: inseminationId
        }
    })
    res.send("insemination deleted");
})

export default router;

