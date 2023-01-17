import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { CowDto, CowResponseWithOwner, } from "./cow.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const cow: CowDto = req.body;
    const ownerId: number = req.body.ownerId;
    const cowFromDB = await prisma.cow.create({
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
    res.json(new CowResponseWithOwner(cowFromDB));
})

export default router;