import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { SemenDto, SemenResponseWithBull } from "./semen.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const semen: SemenDto = req.body;
    const bullId: number = req.body.bullId;
    const semenFromDb = await prisma.semen.create({
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
    res.json(new SemenResponseWithBull(semenFromDb));
})

export default router;