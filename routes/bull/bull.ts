import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { BullDto, BullResponse } from "./bull.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const bull: BullDto = req.body;
    const bullFromDb = await prisma.bull.create({
        data: {
            name: bull.name,
            breedName: bull.breedName
        }
    })
    res.json(new BullResponse(bullFromDb));
})

export default router;