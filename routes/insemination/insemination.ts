import express, { Request, Response, Router } from "express";
import prisma from "../../prisma";
import { InseminationDto, InseminationResponse, InseminationResponseWithALlData } from "./insemination.models";

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
        },
        include: {
            cow: true,
            semen: true
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
        return new InseminationResponseWithALlData(insemination);
    })
    res.json(inseminationList);
})

export default router;

