import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { BullDto, BullResponse } from "./bull.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const bull: BullDto = req.body;
    const bullFromDb = await prisma.bull.findFirst({
        where: {
            name: bull.name
        }
    })
    if(bullFromDb){
        return res.status(400).send("Bull already exists");
    } 
    await prisma.bull.create({
        data: {
            name: bull.name,
            breedName: bull.breedName
        }
    })
    res.status(200).send("Bull succesfully created");
    

})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const bullId: number = Number(req.params.id);
    const bullFromDb = await prisma.bull.findFirst({
        where: {
            id: bullId
        }
    })
    if(!bullFromDb){
        return res.status(404).send("Bull does not exist");
    } 
    await prisma.bull.delete({
        where: {
            id: bullId
        }
    })
    res.status(200).send("Bull succesfully deleted");
    
})

export default router;