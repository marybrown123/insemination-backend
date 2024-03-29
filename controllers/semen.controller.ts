import express, { Request, Response } from "express";
import { makeValidateBody } from "express-class-validator";
import { SemenService } from "../services/semen.service";
import { CreateSemenDto } from "../DTOs/create-semen.dto";
import { UpdateSemenDto } from "../DTOs/update-semen-dto";

const router = express.Router();

const semenService = new SemenService();

router.post("/", makeValidateBody(CreateSemenDto), async (req: Request, res: Response) => {
    const semen: CreateSemenDto = req.body;
    const semenFromDb = await semenService.getByNumber(semen.number);
    if(semenFromDb){
        return res.status(400).send("Semen already exists")
    }
    const semenResponse = await semenService.create(semen)
    res.json(semenResponse);
})

router.delete("/delete/:number", async (req: Request, res: Response) => {
    const semenNumber = req.params.number;
    const semenFromDb = await semenService.getByNumber(semenNumber);
    if(!semenFromDb){
        return res.status(404).send("Semen does not exist");
    }
    await semenService.delete(semenNumber);
    res.send("Semen deleted");
})

router.patch("/patch/:number", async (req: Request, res: Response) => {
    const semenNumber = req.params.number;
    const newSemen: UpdateSemenDto = req.body;
    const semenToBeUpdated = await semenService.getByNumber(semenNumber);
    if(!semenToBeUpdated) {
        return res.status(404).send("Semen does not exist");
    }
    const updatedSemen = await semenService.update(semenNumber, newSemen);
    res.json(updatedSemen);
})

export default router;