import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { CowDto, CowResponseWithOwner, } from "./cow.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
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
    await prisma.cow.create({
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
    res.send("Cow succesfully created");
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