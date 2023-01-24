import express, { Request, Response, Router } from "express";
import { isMemberName } from "typescript";
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

router.delete("/delete", async (req: Request, res: Response) => {
    try{
        const inseminationId: number = req.body.inseminationId;
        await prisma.insemination.delete({
            where: {
                id: inseminationId
            }
        })
        res.json("Insemination deleted")
    } catch(error){
        res.json("Insemination does not exist")
    }
})

export default router;

