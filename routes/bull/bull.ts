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

router.delete("/delete", async (req: Request, res: Response) => {
    try{
        const bullId: number = req.body.bullId;
        await prisma.bull.delete({
        where:{
            id: bullId
        }
        
    })
    res.json("Bull deleted");
    } catch(error){
        res.json("Bull does not exist");
    }
    
    
})

export default router;