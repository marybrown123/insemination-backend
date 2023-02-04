import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { CowDto, CowResponse } from "./cow.models";
import { makeValidateBody } from 'express-class-validator'

const router = express.Router();

router.post("", makeValidateBody(CowDto), async (req: Request, res: Response) => {
    const cow: CowDto = req.body;
    const ownerId: number = req.body.ownerId;
    const cowFromDb = await prisma.cow.findFirst({
        where: {
            earingNumber: cow.earingNumber
        }
    })
    if(cowFromDb){
        return res.status(400).send("Cow already exists")
    }
    const newCow = await prisma.cow.create({
        data: {
            earingNumber: cow.earingNumber,
            owner: {
                connect: {
                    id: ownerId
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
    res.json(new CowResponse(newCow));
})

router.delete("/delete/:earingNumber", async (req: Request, res: Response) => {
    const cowEaringNumber: number = Number(req.params.id);
    const cowFromDb = await prisma.client.findFirst({
        where: {
            id: cowEaringNumber
        }
    })
    if(!cowFromDb){
        return res.status(404).send("Cow does not exist");
    }
    await prisma.client.delete({
        where: {
            id: cowEaringNumber
        }
    })
    res.send("Cow deleted");
})

export default router;