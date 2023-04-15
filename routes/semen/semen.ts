import express, { Request, Response } from "express";
import { idText } from "typescript";
import prisma from "../../prisma";
import { SemenDto, SemenResponse, SemenResponseWithBull } from "./semen.models";
import { makeValidateBody } from "express-class-validator";

const router = express.Router();

router.post("", makeValidateBody(SemenDto), async (req: Request, res: Response) => {
    const semen: SemenDto = req.body;
    const bullId: number = req.body.bullId;
    const semenFromDb = await prisma.semen.findFirst({
        where: {
            number: semen.number
        }
    })
    if(semenFromDb){
        return res.status(400).send("Semen already exists")
    }
    const newSemen = await prisma.semen.create({
        data: {
            number: semen.number,
            bull: {
                connect: {
                    id: bullId
                }
            }
        },
        include: {
            bull: true
        }
    })
    res.json(new SemenResponse(newSemen));
})

router.delete("/delete/:number", async (req: Request, res: Response) => {
    const semenNumber: number = Number(req.params.id);
    const semenFromDb = await prisma.client.findFirst({
        where: {
            id: semenNumber
        }
    })
    if(!semenFromDb){
        return res.status(404).send("Semen does not exist");
    }
    await prisma.client.delete({
        where: {
            id: semenNumber
        }
    })
    res.send("Semen deleted");
})

export default router;