import express, { Request, Response } from "express";
import { makeValidateBody } from 'express-class-validator'
import { BullService } from "../services/bull.service";
import { CreateBullDto } from "../DTOs/create-bull.dto";

const router = express.Router();

const bullService = new BullService();

router.post("/", async (req: Request, res: Response) => {
    // const bull: CreateBullDto = req.body;
    // const bullFromDb = await bullService.getByName(bull.name);

    // if(bullFromDb){
    //     return res.status(400).send("Bull already exists");
    // } 

    // const newBullResponse = await bullService.create(bull);
    // res.json(newBullResponse);
    console.log(req.body);
})

router.get("/list", async (req: Request, res: Response) => {
    const bullsToBeReturned = await bullService.list();
    res.json(bullsToBeReturned);
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const bullId: number = Number(req.params.id);
    const bullFromDb = await bullService.getById(bullId);
    if(!bullFromDb){
        return res.status(404).send("Bull does not exist");
    } 
    await bullService.delete(bullId);
    res.status(200).send("Bull succesfully deleted");
})

export default router;