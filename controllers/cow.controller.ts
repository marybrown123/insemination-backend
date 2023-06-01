import express, { Request, Response } from "express";
import { makeValidateBody } from 'express-class-validator'
import { CowService } from "../services/cow.service";
import { CreateCowDto } from "../DTOs/create-cow.dto";
import { UpdateCowDto } from "../DTOs/update-cow.dto";

const router = express.Router();

const cowService = new CowService();

router.post("/", makeValidateBody(CreateCowDto), async (req: Request, res: Response) => {
    const cow: CreateCowDto = req.body;
    const cowFromDb = await cowService.getByEaringNumber(cow.earingNumber);
    if(cowFromDb){
        return res.status(400).send("Cow already exists")
    }
    const cowResponse = await cowService.create(cow);
    res.json(cowResponse);
})

router.delete("/delete/:earingNumber", async (req: Request, res: Response) => {
    const cowEaringNumber = req.params.earingNumber;
    const cowFromDb = await cowService.getByEaringNumber(cowEaringNumber);
    if(!cowFromDb){
        return res.status(404).send("Cow does not exist");
    }
    await cowService.delete(cowEaringNumber);
    res.send("Cow deleted");
})

router.patch("/patch/:earingNumber", async (req: Request, res: Response) => {
    const cowEaringNumber: string = req.params.earingNumber;
    const newCow: UpdateCowDto = req.body;
    const cowToBeUpdated = await cowService.getByEaringNumber(cowEaringNumber);
    if(!cowToBeUpdated){
        return res.status(404).send("Cow does not exist");
    }
    const updatedCow = await cowService.update(cowEaringNumber, newCow);
    res.json(updatedCow);
})

export default router;