import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { BullDto, BullResponse, BullResponseWithSemens } from "./bull.models";

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
    const newBull = await prisma.bull.create({
        data: {
            name: bull.name,
            breedName: bull.breedName
        }
    })
    res.json(new BullResponse(newBull));
    

})

router.get("/listWithSemens", async (req: Request, res: Response) => {
    const bullList = await prisma.bull.findMany({
        include: {
            semens: true
        }
    })
    const bullsToBeReturned = bullList.map(bull => {
        return new BullResponseWithSemens(bull)
    })
    res.json(bullsToBeReturned);
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