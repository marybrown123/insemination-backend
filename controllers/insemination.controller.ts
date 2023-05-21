import express, { Request, Response, Router } from "express";
import { makeValidateBody } from 'express-class-validator'
import { CreateInseminationDto } from "../DTOs/create-insemination.dto";
import { InseminationService } from "../services/insemination.service";

const router = express.Router();

const inseminationService = new InseminationService();

router.post("/", makeValidateBody(CreateInseminationDto), async (req: Request, res: Response) => {
    const insemination: CreateInseminationDto = req.body;
    const inseminationResponse = await inseminationService.create(insemination);
    res.json(inseminationResponse);
})

router.get("/list", async (req: Request, res: Response) => {
    const inseminationsResponse = await inseminationService.get();
    res.json(inseminationsResponse);
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const inseminationId: number = Number(req.params.id);
    const inseminationFromDb = inseminationService.getById(inseminationId);
    if(!inseminationFromDb){
        return res.status(404).send("Insemination does not exist");
    }
    await inseminationService.delete(inseminationId);
    res.send("insemination deleted");
})

export default router;

